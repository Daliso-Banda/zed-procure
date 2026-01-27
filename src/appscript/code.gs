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
const ADMIN_EMAIL = "isaaclumbwest+grl-siterequest@gmail.com";
const SITE_KEY = "gentlemans-frontend";
const SHEET_ID = "1oP-iwSN7jJ5OVY3S-_n1iMJvktNmvbsl4BNmVSBBTu4";

/***********************
 * ENTRY POINT
 ***********************/
/***********************
 * FETCH PROJECTS (GET)
 ***********************/
/***********************
 * FETCH PROJECTS (GET)
 ***********************/
function doGet(e) {
  try {
    const ss = SpreadsheetApp.openById(SHEET_ID);
    const sheet = ss.getSheetByName("Projects"); 
    
    if (!sheet) {
      return ContentService.createTextOutput(JSON.stringify({ error: "Sheet 'Projects' not found" }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    const data = sheet.getDataRange().getValues();
    const rows = data.slice(1); // Skip header row
    
    const projects = rows.map(row => {
      const rawImageValue = String(row[6] || ""); 
      let fileId = "";

      // Extract File ID from full URL or use as-is
      if (rawImageValue.includes("/d/")) {
        fileId = rawImageValue.split("/d/")[1].split("/")[0];
      } else if (rawImageValue.includes("id=")) {
        fileId = rawImageValue.split("id=")[1].split("&")[0];
      } else {
        fileId = rawImageValue;
      }

      // Using the thumbnail endpoint to prevent Opaque Response Blocking
      const finalImageUrl = fileId 
        ? `https://drive.google.com/thumbnail?id=${fileId}&sz=w1200` 
        : null;

      return {
        id: row[0],
        title: row[1],
        client: row[2],
        category: row[3],
        description: row[4],
        impact: row[5],
        imageUrl: finalImageUrl
      };
    });

    return ContentService.createTextOutput(JSON.stringify(projects))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ 
      status: "error", 
      message: err.toString() 
    }))
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
// function handleQuoteRequest(payload) {
//   const data = payload.data || {};
//   Logger.log("Handling quote request: " + JSON.stringify(data));

//   MailApp.sendEmail({
//     to: ADMIN_EMAIL,
//     subject: "New Quote Request",
//     htmlBody: `
//       <h3>New Quote Request</h3>
//       <b>Name:</b> ${data.name || "N/A"}<br/>
//       <b>Email:</b> ${data.email || "N/A"}<br/>
//       <b>Service:</b> ${data.service || "N/A"}<br/><br/>
//       <b>Details:</b><br/>
//       ${data.details || "N/A"}
//     `
//   });

//   logToSheet("Quote Requests", payload);
// }

function handleQuoteRequest(payload) {
  const data = payload.data || {};
  
  // Prepare the base email options
  const emailOptions = {
    to: ADMIN_EMAIL,
    subject: `New Quote Request: ${data.service || "General"}`,
    htmlBody: `
      <h3>New Quote Request</h3>
      <b>Name:</b> ${data.name || "N/A"}<br/>
      <b>Email:</b> ${data.email || "N/A"}<br/>
      <b>Service:</b> ${data.service || "N/A"}<br/><br/>
      <b>Details:</b><br/>
      ${data.details || "N/A"}
    `
  };

  // Check if an attachment exists and convert it
  if (data.attachment && data.attachment.base64) {
    try {
      const decodedFile = Utilities.base64Decode(data.attachment.base64);
      const blob = Utilities.newBlob(decodedFile, data.attachment.type, data.attachment.name);
      
      // Add the file to the email
      emailOptions.attachments = [blob];
      
      // Update HTML body to let admin know there is a file
      emailOptions.htmlBody += `<br/><br/>📎 <b>Attachment included:</b> ${data.attachment.name}`;
    } catch (err) {
      Logger.log("Attachment error: " + err.toString());
      emailOptions.htmlBody += `<br/><br/>⚠️ <b>Attachment failed to process.</b>`;
    }
  }

  MailApp.sendEmail(emailOptions);

  // LOGGING: Remove the heavy Base64 data before saving to Google Sheets
  if (data.attachment) {
    data.attachment.base64 = "[FILE ATTACHED]"; // Replace long string with a placeholder
  }
  
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
// function logToSheet(sheetName, payload) {
//   const ss = SpreadsheetApp.openById(SHEET_ID);
//   let sheet = ss.getSheetByName(sheetName);

//   if (!sheet) {
//     sheet = ss.insertSheet(sheetName);
//     sheet.appendRow([
//       "Timestamp",
//       "Event",
//       "Email",
//       "Payload"
//     ]);
//   }

//   sheet.appendRow([
//     new Date(),
//     payload.event,
//     payload.data && payload.data.email ? payload.data.email : "",
//     JSON.stringify(payload.data || {})
//   ]);
// }

function logToSheet(sheetName, payload) {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  let sheet = ss.getSheetByName(sheetName);
  const data = payload.data || {};

  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
    // Setup Headers for Quote Requests
    sheet.appendRow([
      "Timestamp", 
      "Name", 
      "Email", 
      "Service", 
      "Details", 
      "Attachment Name"
    ]);
  }

  // Append clean data
  sheet.appendRow([
    new Date(),
    data.name || "N/A",
    data.email || "N/A",
    data.service || "N/A",
    data.details || "N/A",
    (data.attachment ? data.attachment.name : "None")
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
