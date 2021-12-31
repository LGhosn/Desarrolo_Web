
function par(numero = 0) {
    return numero % 2 === 0;
};

// console.log(par(2));

// Expresion de la funcion
const impar = function (numero = 0) {
    return numero % 2 !== 0;
};

// console.log(impar(3));

// IIFE
(function() {
    // console.log("Esto es una funcion")
})();

const clasificador = {
    esPar: function (numero) {
        return par(numero);
    },
    esImpar : function(numero) {
        return impar(numero);
    }
};

// console.log(clasificador.esPar(2));
// console.log(clasificador.esImpar(2));

// Arrow functions
const factorial = (numero) => {
    if (numero <= 1) {
        return 1;
    }
    return numero * factorial(numero - 1);
}
// console.log(factorial(5));


