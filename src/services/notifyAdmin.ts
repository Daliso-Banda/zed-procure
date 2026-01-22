export async function notifyAdmin(payload: any) {
  // 1. Add the siteKey right here to ensure it's always included
  const authorizedPayload = {
    ...payload,
    siteKey: "gentlemans-frontend" 
  };

  try {
    await fetch(import.meta.env.VITE_NOTIFY_URL, {
      method: "POST",
      mode: "no-cors", // Crucial for GAS
      headers: {
        "Content-Type": "text/plain;charset=utf-8"
      },
      body: JSON.stringify(authorizedPayload)
    });

    // With no-cors, we can't read the response body.
    // If we reached this line, the request was successfully dispatched.
    return { status: "dispatched" };

  } catch (error) {
    console.error("Notification Service Error:", error);
    throw new Error("Notification failed");
  }
}