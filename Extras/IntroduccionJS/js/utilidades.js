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
const cadena5 = "20";

// console.log(cadena.length);

// console.log(cadena.indexOf("mas"));
// console.log(cadena.indexOf("masa"));

// console.log(cadena.includes('Mesa'));
// console.log(cadena.includes('mesa'));

// console.log(cadena + " " + cadena2);

// console.log("viva", cadena4);
// console.log(`viva: ${cadena4}`);

// console.log(parseInt(cadena5));


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
// console.log(pi.toString());

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

// console.log(teclado);
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

// Arrays
const numeros = [10, 20, 30, 40, 50];
// console.table(numeros);

const meses = new Array("Enero", "Febrero", "Marzo");
// console.table(meses);
// console.log(meses.includes("Enero"));

// numeros.forEach(num => console.log(num);)
// const teclado = numeros.map( producto => producto.nombre);


numeros.push(60, 70, 80); //agrega al final
numeros.unshift(0); //agrega al principio
const nuevoArreglo = [...meses, "Junio"]; //equivalente al push
// console.table(numeros);

numeros.pop(); //elimina el ultimo
numeros.shift(); //elimina el primero
numeros.splice(3, 1) //elimina a partir del elemento 3 los n elementos
// console.table(numeros);

const carrito = [    
    { nombre: "monitor", precio: 20 },
    { nombre: "cpu", precio: 30 },
    { nombre: "gpu", precio: 50 },
    { nombre: "mouse", precio: 10 },
];

let result = carrito.some(function(producto) {
    return producto.nombre == "cpu";
})
// console.log(result);

result = carrito.some(producto => producto.nombre == "auricular");
// console.log(result);

let sumaDelCarrito = carrito.reduce(function(total, producto) {
    return total + producto.precio;
}, 0);
// console.log(sumaDelCarrito);

sumaDelCarrito = carrito.reduce( (string, producto) => string + " " + producto.nombre, "nombres: ");
// console.log(sumaDelCarrito);

let impares = carrito.filter( function(producto) {
    return (producto.precio % 2) != 0
});
// console.log(impares);


const puntaje = "1000";
if (puntaje == 1000) {
    // console.log("no");
}
else if (puntaje === 1000) {
    // console.log("si");
}


// This
const reservacion = {
    nombre : "Lionel",
    apellido : "Messi",
    total : 0,
    informacion : function() {
        console.log(`El cliente es ${this.nombre} ${this.apellido}`);
    }
}

