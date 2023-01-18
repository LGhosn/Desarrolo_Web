// POO

// Objeto literal 
const producto = {
    nombre : "Tablet",
    precio : 40
};


// Constructor de Objeto
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}
// Prototypes
Producto.prototype.mostrarInfo = function() {
    return `El producto se llama ${this.nombre} y tiene un precio de: $${this.precio}`;  
} 

const instancia = new Producto("Monitor Curvo", 500);
// console.log(instancia);
// console.log(instancia.mostrarInfo());


// Clases
class Producto2 {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    mostrarInfo() {
        return `El producto se llama ${this.nombre} y tiene un precio de: $${this.precio}`;  
    }

    obtenerPrecio() {
        return this.precio;
    }

}

const producto2 = new Producto2("Monitor Curvo", 500);
// console.log(producto2);
// console.log(producto2.mostrarInfo());
// console.log(producto2.obtenerPrecio());

// Herencii
class Producto3 extends Producto2 {
    constructor(nombre, precio, id) {
        super(nombre, precio);
        this.id = id;
    }

    mostrarInfo() {
        return `${super.mostrarInfo() } y su id es ${this.id}`;
    }
}

const producto3 = new Producto3("Joystick Redragon", 20, "select");
// console.log(producto3.mostrarInfo());
// console.log(producto3.obtenerPrecio());


// Promises
const autenticarUsuario = new Promise( (resolve, reject) => {
    const auth = true;
    
    if (auth) {
        resolve("Usuario autenticado");
    } else {
        reject("Usuario invalido");
    }
});

// console.log(autenticarUsuario);
// autenticarUsuario.then((resultado) => console.log(resultado));
// autenticarUsuario.catch((resultado) => console.log(resultado));

