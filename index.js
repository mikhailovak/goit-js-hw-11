/* empty css                      */import{S as u,i as f}from"./assets/vendor-BrddEoy-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const d="46942599-830cfdf21ab89ebfad31f139e",m="https://pixabay.com/api/";function p(n){const o=new URLSearchParams({key:d,q:n,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${m}?${o}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}let a=null;function g(n,o){const t=n.map(s=>`
        <li class="image-item">
            <a href="${s.largeImageURL}" class="gallery-link"> 
                <img src="${s.webformatURL}" alt="${s.tags}" />
                <div class="image-info">
                    <p><strong>Likes:</strong> ${s.likes}</p>
                    <p><strong>Views:</strong> ${s.views}</p>
                    <p><strong>Comments:</strong> ${s.comments}</p>
                    <p><strong>Downloads:</strong> ${s.downloads}</p>
                </div>
            </a>
        </li>
    `).join("");o.innerHTML=t,a?a.refresh():a=new u(".gallery-link",{captionsData:"alt",captionDelay:250})}function h(){f.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}const y=document.querySelector(".submit-form"),w=document.querySelector(".list"),c=document.getElementById("loader");function L(){c.style.display="block"}function l(){c.style.display="none"}function b(n){n.preventDefault();const o=n.currentTarget.elements.searchQuery.value.trim();if(o===""){iziToast.warning({title:"Warning",message:"Please enter a search query!",position:"topRight"});return}L(),p(o).then(t=>{l(),t.hits.length===0?h():g(t.hits,w)}).catch(t=>{l(),console.error("Error:",t),iziToast.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})})}y.addEventListener("submit",b);
//# sourceMappingURL=index.js.map
