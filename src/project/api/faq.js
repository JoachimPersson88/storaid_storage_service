const API_BASE = "https://win25-jsf-assignment.azurewebsites.net"; 

export async function fetchFAQ() {
  try {
    const res = await fetch(`${API_BASE}/api/faqs`);

    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    return await res.json(); 
  } catch (err) {
    console.error("fetchFAQ failed:", err);
    return [];
  }
}