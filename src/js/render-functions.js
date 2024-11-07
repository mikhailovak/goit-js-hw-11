import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

export function renderImages(images, container) {
    const markup = images.map(image => `
        <li class="image-item">
            <img src="${image.webformatURL}" alt="${image.tags}" />
        </li>
    `).join("");
    container.innerHTML = markup;
}

export function showNoResultsMessage() {
    iziToast.error({
        title: "Error",
        message: "Sorry, there are no images matching your search query. Please try again!",
        position: "topRight"
    });
}
