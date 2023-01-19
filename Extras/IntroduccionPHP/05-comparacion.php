<?php include 'includes/header.php';

$menor = 1 < 2;
$mayor = 1 > 2;
$menorIgual = 1 <= 2;
$mayorIgual = 1 >= 2;
$igual = 1 == 2;
$identico = 1 === '2'; // igual y del mismo tipo
$diferente = 1 != 2;
$diferente2 = 1 <> 2; // igual que !=
$diferente3 = 1 !== 2; // igual que != pero comprueba el tipo de dato
$spaceShip = 1 <=> 2; // -1 si el primero es menor, 0 si son iguales, 1 si el primero es mayor

include 'includes/footer.php';
