const API_BASE = "https://win25-jsf-assignment.azurewebsites.net";

export async function createBooking(payload) {
  const res = await fetch(`${API_BASE}/api/booking`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    const msg = data?.message || `HTTP ${res.status}`;
    throw new Error(msg);
  }

  return data;
}
