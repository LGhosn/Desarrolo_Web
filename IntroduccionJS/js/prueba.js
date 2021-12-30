"use strict"; //para marcar todos los errores

//Variables 

var variable = "Audifonos Gamers";
// console.log(variable);

let otraVariable = "Audifonos Gamers";

const variableConstante = "Messi";

const cadena = "Mesa que mas apluada Mesa";
const cadena2 = String('Silla');
const cadena3 = new String ("Cama");
const cadena4 = "Viva \"Peron\"";

// console.log(cadena.length);

// console.log(cadena.indexOf("mas"));
// console.log(cadena.indexOf("masa"));

// console.log(cadena.includes('Mesa'));
// console.log(cadena.includes('mesa'));

// console.log(cadena + " " + cadena2);

// console.log("viva", cadena4);
// console.log(`viva: ${cadena4}`);



//Numeros

const entero = 100;
const flotante = 10.20;

// console.log(entero - flotante);



//Objeto Math --> para ver todo poner en la consoloa: window.Math <--

let random = Math.random();
const pi = Math.PI;

let redondeoNormal = Math.round(2.5);
let redondeoNormal2 = Math.round(2.4);

let redondeoHaciaArriba = Math.ceil(2.1);
let redondeoHaciaAbajo = Math.floor(2.9);

let raiz = Math.sqrt(4);

let abs = Math.abs(-1);

let minimo = Math.min(1,23,4,5,67,0);

// console.log(random);
// console.log(pi);

// console.log(redondeoNormal);
// console.log(redondeoNormal2);

// console.log(redondeoHaciaArriba);
// console.log(redondeoHaciaAbajo);

// console.log(raiz);

// console.log(abs);

// console.log(minimo);



// Orden de las operaciones

let res;

res = (70 + 30) * .2; //20 porciento

// console.log(res);

// Incrementos

let puntaje = 10;

// console.log(puntaje++);
// console.log(puntaje);
// console.log(++puntaje);
// console.log(puntaje += 10);



// Objetos 

const teclado = {
    nombre : "teclado",
    precio : 20,
    disponible : true
};

console.log(teclado);
// console.log(teclado.nombre);
// console.log(teclado["precio"]);

teclado.idioma = "español"; //para agregar valores
// console.log(teclado);

delete teclado.disponible;
// console.log(teclado);

// Destructuring
const {precio} = teclado; //crea una variable con la informacion del valor del objeto
const {nombre, idioma} = teclado;
// console.log(precio);
// console.log(nombre, idioma);

Object.seal(teclado); //permite modificar los existentes

Object.freeze(teclado);  // no se puede cambiar mas el objeto

const mouse = {
    nombreMouse : "mouse",
    precioMouse : 10,
    disponibleMouse : true
};

const union = {... teclado, ...mouse}; //Para unir objetos
// console.log(union);





