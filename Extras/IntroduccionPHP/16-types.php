<?php

declare(strict_types=1); // strict requirement
include 'includes/header.php';

function loremIpsum(): string
{ // indica que la funcion retorna un string
    return "lorem ipsum";
}
$lorem = loremIpsum();

function sumar(int $numero1, int $numero2): int // marca el error
{ // indica que la funcion retorna un int
    return "sumar";
}

function retornoOpcional(bool $condicion): ?int // indica que la funcion PUEDE retornar un int
{
    if ($condicion) {
        return 10;
    }
    return null;
}

include 'includes/footer.php';
