/* empty css                      */import{i as a}from"./assets/vendor-I1I71QQ2.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const c="46942599-830cfdf21ab89ebfad31f139e",u="https://pixabay.com/api/";function l(i){const o=new URLSearchParams({key:c,q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${u}?${o}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function f(i,o){const t=i.map(s=>`
        <li class="image-item">
            <img src="${s.webformatURL}" alt="${s.tags}" />
        </li>
    `).join("");o.innerHTML=t}function m(){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}const h=document.querySelector(".submit-form"),p=document.querySelector(".list");function d(i){i.preventDefault();const o=i.currentTarget.elements.searchQuery.value.trim();if(o===""){iziToast.warning({title:"Warning",message:"Please enter a search query!",position:"topRight"});return}l(o).then(t=>{t.hits.length===0?m():f(t.hits,p)}).catch(t=>{console.error("Error:",t),iziToast.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})})}h.addEventListener("submit",d);
//# sourceMappingURL=index.js.map