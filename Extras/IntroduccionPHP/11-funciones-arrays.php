<?php include 'includes/header.php';

// Funciones para arrays
// https://www.php.net/manual/es/ref.array.php

// count() - cuenta el numero de elementos de un array
$numeros = [1, 4, 3, 5, 2];

echo count($numeros); // 5

// sort() - ordena un array
sort($numeros); // Ordena por valor
echo '<pre>';
var_dump($numeros);
echo '</pre>';

// rsort() - ordena un array en orden inverso
rsort($numeros); // Ordena por valor
echo '<pre>';
var_dump($numeros);
echo '</pre>';

// in_array() - verifica si un valor existe en un array
echo in_array(1, $numeros); // true

// Ordenar arrglo asociativo
$cliente = [
    'tipo' => 'Premium',
    'saldo' => 200,
    'nombre' => 'Juan'
];
asort($cliente); // Ordena por valor
echo '<pre>';
var_dump($cliente);
echo '</pre>';

ksort($cliente); // Ordena por llave
echo '<pre>';
var_dump($cliente);
echo '</pre>';

krsort($cliente); // Ordena por llave inversa
echo '<pre>';
var_dump($cliente);
echo '</pre>';

include 'includes/footer.php';
