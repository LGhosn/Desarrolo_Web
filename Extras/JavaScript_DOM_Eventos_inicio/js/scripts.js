// querySelector
const heading = document.querySelector(".header__texto h2") // retorna 0 o 1 elemento
heading.textContent = "Viva Messi";
heading.classList.add("nueva-clase");

// querySelectorAll
const enlaces = document.querySelectorAll(".navegacion a");
enlaces[0].textContent = "nuevo texto";
enlaces[0].href = "http://google.com";
enlaces[0].classList.add("nueva-clase");
enlaces[0].classList.remove("navegacion__enlace");

// getElementById
const heading2 = document.getElementById("heading");
// console.log(heading2);

// Generar enlace
const nuevoEnlace = document.createElement("A"); //nombre de la etiqueta en mayuscula

nuevoEnlace.href = 'http://google.com'; // Agrego href

nuevoEnlace.classList.add("navegacion__enlace");// Agrego clase

nuevoEnlace.textContent = "Nuevo enlace"; // Agrego Texto

const navegacion = document.querySelector(".navegacion");// Agrego al documento
navegacion.appendChild(nuevoEnlace);

// console.log(nuevoEnlace);

// Eventos
console.log(1);

window.addEventListener('load', function() { // load espera a que js y los archivos que dependen del html esten listos
    console.log(2);
});
window.onload = function() { // lo mismo que arriba
    console.log(3);
};

document.addEventListener('DOMContentLoaded', function() { // espera que se descargue el html sin fijarse el js/css/imagenes
    console.log(4);
});

console.log(5);

window.onscroll = function() { // ocurre cada vez que se hace scroll sobre la pagina
    console.log("scroll");
};


// seleccionar elementos y asociarles un evento
// const botonEnviar = document.querySelector('.boton--primario');
// botonEnviar.addEventListener('click', function(evento) {
//     console.log(evento);
//     evento.preventDefault();
//     console.log("click");
// });

// Eventos de los inputs y textarea
const datos = {
    nombre: '',
    email: '',
    mensaje: ''
};

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('change', function() {
    console.log('escribiendo...');
});
nombre.addEventListener('input', leerEntrada);
email.addEventListener('input', leerEntrada);
mensaje.addEventListener('input', leerEntrada);
// evento submit
formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    // validando formulario 
    const{nombre, email, mensaje} = datos;
    if (nombre === '' || email === '' || mensaje === '') {
        mostrarAlerta('Todos los campos son obligatorios', 'error');
        return;    
    }
    mostrarAlerta('Formulario enviado correctamente');

    console.log('enviando formulario');

});


function leerEntrada(evento) {
    console.log('es en tiempo real...');
    console.log(evento.target.value);

    datos[evento.target.id] = evento.target.value;
    console.log(datos);
};
function mostrarAlerta(mensaje, error=null) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if (error) {
        alerta.classList.add('error');
    }
    else {
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 4000);
}