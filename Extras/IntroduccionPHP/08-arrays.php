<?php include 'includes/header.php';

$numeros = [1, 2, 3, 4, 5];
echo "<pre>";
var_dump($numeros);
echo "</pre>";

// Obtener un elemento
echo $numeros[3]; // 4

// Agregar un elemento
$numeros[5] = 6;
array_push($numeros, 7); // Agrega un elemento al final del array
array_unshift($numeros, 0); // Agrega un elemento al inicio del array

include 'includes/footer.php';
