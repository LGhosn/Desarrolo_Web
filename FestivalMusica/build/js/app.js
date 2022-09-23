document.addEventListener('DOMContentLoaded', function() {
    iniciarApp();
});

function iniciarApp() {
    crearGaleria();
}

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes');

    for(let i = 1; i <= 12; i++) {
        const imagen = document.createElement('picture');
        imagen.innerHTML = `
            <source srcset="build/img/thumb/${i}.webp" type="image/webp">
            <source srcset="build/img/thumb/${i}.avif" type="image/avif">
            <img loading="lazy" src="build/img/thumb/${i}.jpg" alt="Imagen ${i} galeria">
        `;

        galeria.appendChild(imagen);
    }
}