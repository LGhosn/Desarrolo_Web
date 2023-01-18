
const boton = document.querySelector('#boton');
boton.addEventListener('click', function() {
    Notification.requestPermission()
        .then(resultado => console.log(`El resultado es ${resultado}`));
});


if (Notification.permission == 'granted') {
    new Notification('YEIIIII', {
        icon: 'img/messi.jpg'
    })
}

// Async / await

function descargarNuevosClientes() {
    return new Promise( resolve => {
        console.log("Descargando clientes...");

        setTimeout(function () {
            resolve("Los clientes fueron descargados");
        }, 5000);


    });
};

async function app() {
    try{
        const res = await descargarNuevosClientes();
        console.log(res);
    }catch (error){
        console.log(error)
    }
}
// app();
// setTimeout( function() {
//     console.log("Timeout");
// }, 1000);

// setInterval( function() {
//     console.log("intervalo");
// }, 3000);


// Fetch api
function obtenerEmpleados() {
    
    const archivos = 'empleados.json';

    fetch(archivos)
        .then( resultado => resultado.json())
        .then( datos => {
            const {empleados} = datos;
            empleados.forEach(empleado => {
                console.log(empleado.nombre)
                console.log(empleado.puesto)
                console.log(empleado.id)                
            });
        })
    
}

obtenerEmpleados();

