const API_KEY = "46942599-830cfdf21ab89ebfad31f139e";
const BASE_URL = "https://pixabay.com/api/";

export function fetchData(query) {
    const params = new URLSearchParams({
        key: API_KEY,
        q: query, 
        image_type: "photo",
        orientation: "horizontal",
        safesearch: "true"
    });
    return fetch(`${BASE_URL}?${params}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        });
}
