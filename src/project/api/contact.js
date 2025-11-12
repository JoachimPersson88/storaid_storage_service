// Enkel klient för kontaktformuläret
const API_BASE = "https://win25-jsf-assignment.azurewebsites.net";

/**
 * Skickar kontaktmeddelande till /api/contact
 * payload: { name, email, phoneNumber, subject, comment }
 * returnerar { success: boolean, message: string }
 */
export async function sendContact(payload) {
  const res = await fetch(`${API_BASE}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    // Låt UI:t fånga upp felet med ett vänligt meddelande
    throw new Error(`HTTP ${res.status}`);
  }
  return res.json(); // förväntas: { success: true, message: "..." }
}
