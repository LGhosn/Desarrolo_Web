<?php include 'includes/header.php';

// Variables
$nombre = "Lautaro";
echo $nombre;
var_dump($nombre);

define('constante', 'valor de la constante');
echo constante; // sin el $

const constante2 = 'valor de la constante 2';
echo constante2;

include 'includes/footer.php';
