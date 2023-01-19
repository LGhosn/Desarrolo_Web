<?php

declare(strict_types=1); // strict requirement
include 'includes/header.php';


// factorial
function factorial($numero)
{
    $resultado = 1;
    for ($i = 1; $i <= $numero; $i++) {
        $resultado *= $i;
    }
    return $resultado;
}

echo factorial(5);

// factorial recursivo
function factorialRecursivo(int $numero = 0)
{
    if ($numero == 0) {
        return 1;
    }
    return $numero * factorialRecursivo($numero - 1);
}

echo factorialRecursivo(5);
echo factorialRecursivo('5'); // marca el error

include 'includes/footer.php';
