function iniciarApp(){navegacionFija(),crearGaleria(),scrollNav()}function navegacionFija(){const e=document.querySelector(".header"),n=document.querySelector(".sobre-festival"),t=document.querySelector("body");window.addEventListener("scroll",(function(){n.getBoundingClientRect().top<0?(e.classList.add("fijo"),t.classList.add("body-scroll")):(e.classList.remove("fijo"),t.classList.remove("body-scroll"))}))}function scrollNav(){document.querySelectorAll(".navegacion-principal a").forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();document.querySelector(e.target.attributes.href.value).scrollIntoView({behavior:"smooth"})}))}))}function crearGaleria(){const e=document.querySelector(".galeria-imagenes");for(let n=1;n<=12;n++){const t=document.createElement("picture");t.innerHTML=`\n            <source srcset="build/img/thumb/${n}.webp" type="image/webp">\n            <source srcset="build/img/thumb/${n}.avif" type="image/avif">\n            <img loading="lazy" src="build/img/thumb/${n}.jpg" alt="Imagen ${n} galeria">\n        `,t.onclick=function(){mostrarImagen(n)},e.appendChild(t)}}function mostrarImagen(e){const n=document.createElement("picture");n.innerHTML=`\n            <source srcset="build/img/grande/${e}.webp" type="image/webp">\n            <source srcset="build/img/grande/${e}.avif" type="image/avif">\n            <img loading="lazy" src="build/img/grande/${e}.jpg" alt="Imagen ${e} galeria">\n        `;const t=document.createElement("div");t.appendChild(n),t.classList.add("overlay"),t.onclick=function(){document.querySelector("body").classList.remove("fijar-body"),t.remove()};const o=document.createElement("p");o.textContent="X",o.classList.add("btn-cerrar"),o.onclick=function(){document.querySelector("body").classList.remove("fijar-body"),t.remove()},t.appendChild(o);const c=document.querySelector("body");c.appendChild(t),c.classList.add("fijar-body")}document.addEventListener("DOMContentLoaded",(function(){iniciarApp()}));
//# sourceMappingURL=app.js.map
