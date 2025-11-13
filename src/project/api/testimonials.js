const API_BASE = "https://win25-jsf-assignment.azurewebsites.net"; 

export async function fetchTestimonials() {
  try {
    const res = await fetch(`${API_BASE}/api/testimonials`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    return await res.json(); 
  } catch (err) {
    console.error("fetchTestimonials failed:", err);
    return [];
  }
}