/**************************************************
 * GENTLEMANS WEBSITE NOTIFICATIONS API
 * Google Apps Script Web App
 **************************************************/

/***********************
 * CORS PREFLIGHT
 ***********************/
function doOptions(e) {
  return corsResponse({});
}

/***********************
 * CONFIGURATION
 ***********************/
const ADMIN_EMAIL = "info@gentlemansltd.com";
const SITE_KEY = "gentlemans-frontend";
const SHEET_ID = "1oP-iwSN7jJ5OVY3S-_n1iMJvktNmvbsl4BNmVSBBTu4";

/***********************
 * ENTRY POINT
 ***********************/
/***********************
 * FETCH PROJECTS (GET)
 ***********************/
function doGet(e) {
  try {
    const ss = SpreadsheetApp.openById(SHEET_ID);
    const sheet = ss.getSheetByName("Projects"); // Ensure your sheet tab is named exactly "Projects"
    const data = sheet.getDataRange().getValues();
    
    // Assume Row 1 is headers: [ID, Title, Client, Category, Description, Impact, ImageID]
    const rows = data.slice(1);
    
    const projects = rows.map(row => ({
      id: row[0],
      title: row[1],
      client: row[2],
      category: row[3],
      description: row[4],
      impact: row[5],
      // Transformation of Drive ID to direct image URL
      imageUrl: row[6] ? `https://drive.google.com/uc?export=view&id=${row[6]}` : null
    }));

    return ContentService.createTextOutput(JSON.stringify(projects))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return json({ status: "error", message: "Empty request body" });
    }

    const payload = JSON.parse(e.postData.contents);
    Logger.log("PARSED PAYLOAD: " + JSON.stringify(payload));

    if (!isAuthorized(payload)) {
      Logger.log("Unauthorized payload: " + JSON.stringify(payload));
      return json({ status: "error", message: "Unauthorized" });
    }

    routeEvent(payload);
    return json({ status: "ok" });

  } catch (err) {
    Logger.log("ERROR in doPost: " + err.stack);
    return json({ status: "error", message: err.message });
  }
}

/***********************
 * SECURITY
 ***********************/
function isAuthorized(payload) {
  return payload.siteKey === SITE_KEY;
}

/***********************
 * ROUTER
 ***********************/
function routeEvent(payload) {
  Logger.log("EVENT RECEIVED: " + payload.event);

  switch (payload.event) {
    case "quote_request":
      handleQuoteRequest(payload);
      break;

    case "compliance_request":
      handleComplianceRequest(payload);
      break;

    default:
      logToSheet("Unknown Requests", payload);
      Logger.log("Unknown event: " + JSON.stringify(payload));
  }
}

/***********************
 * HANDLERS
 ***********************/
function handleQuoteRequest(payload) {
  const data = payload.data || {};
  Logger.log("Handling quote request: " + JSON.stringify(data));

  MailApp.sendEmail({
    to: ADMIN_EMAIL,
    subject: "New Quote Request",
    htmlBody: `
      <h3>New Quote Request</h3>
      <b>Name:</b> ${data.name || "N/A"}<br/>
      <b>Email:</b> ${data.email || "N/A"}<br/>
      <b>Service:</b> ${data.service || "N/A"}<br/><br/>
      <b>Details:</b><br/>
      ${data.details || "N/A"}
    `
  });

  logToSheet("Quote Requests", payload);
}

function handleComplianceRequest(payload) {
  const data = payload.data || {};
  Logger.log("🚀 Compliance handler reached: " + JSON.stringify(data));

  const docs = Array.isArray(data.documents) ? data.documents : [];

  MailApp.sendEmail({
    to: ADMIN_EMAIL,
    subject: "Compliance Documents Request",
    htmlBody: `
      <h3>Compliance Documents Request</h3>
      <b>Company:</b> ${data.companyName || "N/A"}<br/>
      <b>Contact:</b> ${data.contactPerson || "N/A"}<br/>
      <b>Email:</b> ${data.email || "N/A"}<br/><br/>
      <b>Purpose:</b><br/>
      ${data.purpose || "N/A"}<br/><br/>
      <b>Documents Requested:</b>
      <ul>
        ${docs.length ? docs.map(d => `<li>${d}</li>`).join("") : "<li>None specified</li>"}
      </ul>
    `
  });

  logToSheet("Compliance Requests", payload);
}

function testEmail() {
  MailApp.sendEmail(
    ADMIN_EMAIL,
    "Test Email",
    "If you received this, MailApp works."
  );
}

/***********************
 * GOOGLE SHEETS LOGGING
 ***********************/
function logToSheet(sheetName, payload) {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  let sheet = ss.getSheetByName(sheetName);

  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
    sheet.appendRow([
      "Timestamp",
      "Event",
      "Email",
      "Payload"
    ]);
  }

  sheet.appendRow([
    new Date(),
    payload.event,
    payload.data && payload.data.email ? payload.data.email : "",
    JSON.stringify(payload.data || {})
  ]);
}

/***********************
 * RESPONSE HELPERS
 ***********************/
function json(obj) {
  return corsResponse(obj);
}

function corsResponse(obj) {
  const output = ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);

  // GAS workaround: inject CORS headers
  output.getHeaders = function () {
    return {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    };
  };

  return output;
}
