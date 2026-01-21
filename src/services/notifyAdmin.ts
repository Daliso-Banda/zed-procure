// src/services/notifyAdmin.ts
export async function notifyAdmin(payload) {
  const response = await fetch(import.meta.env.VITE_NOTIFY_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-SITE-KEY": import.meta.env.VITE_SITE_KEY
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error("Notification failed");
  }

  return response.json();
}
