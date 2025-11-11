const API_BASE = "https://win25-jsf-assignment.azurewebsites.net"; 

export async function fetchTestimonials() {
  try {
    const res = await fetch(`${API_BASE}/api/testimonials`, {
      headers: { Accept: "application/json" },
    });
    // Utför ett HTTP GET-anrop till `${API_BASE}/api/testimonials`.
    // $-tecknet är en del av template literals (mallsträngar) i JavaScript.

    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    // Detta gör att vi hoppar till catch-blocket istället för att försöka läsa body.

    return await res.json(); 
  } catch (err) {
    console.error("fetchTestimonials failed:", err);
    return [];
  }
}