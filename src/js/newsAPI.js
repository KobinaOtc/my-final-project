const API_KEY = import.meta.env.VITE_NEW_API_KEY;
const API_URL = `https://newsapi.org/v2/everything?q=apple&from=2025-10-14&to=2025-10-14&sortBy=popularity&apiKey=${API_KEY}`

export async function fetchNews() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`API error: ${response.status} ${response.statusText}`)
        }
        const data = await response.json();
        console.log(data.results);
        return data.results;
    } catch (error) {
        console.error("Could not fetch news:", error);
        return [];
    }
}