import { fetchData } from './js/pixabay-api.js';
import { renderImages, showNoResultsMessage } from './js/render-functions.js';

const form = document.querySelector(".submit-form");
const list = document.querySelector(".list");

function handleSearch(event) {
    event.preventDefault();

    const query = event.currentTarget.elements.searchQuery.value.trim();
    if (query === "") {
        iziToast.warning({
            title: "Warning",
            message: "Please enter a search query!",
            position: "topRight"
        });
        return;
    }

    fetchData(query)
        .then((data) => {
            if (data.hits.length === 0) {
                showNoResultsMessage();
            } else {
                renderImages(data.hits, list);
            }
        })
        .catch(error => {
            console.error("Error:", error);
            iziToast.error({
                title: "Error",
                message: "Something went wrong. Please try again later.",
                position: "topRight"
            });
        });
}

form.addEventListener("submit", handleSearch);
