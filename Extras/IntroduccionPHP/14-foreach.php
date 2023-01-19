<?php include 'includes/header.php';

$clientes = array('Pedro', 'Juan', 'Karen');

foreach ($clientes as $cliente) {
    echo $cliente . '<br>';
}

$cliente = [
    'nombre' => 'Juan',
    'saldo' => 200,
    'tipo' => 'Premium'
];

foreach ($cliente as $key => $value) {
    echo $key . ' => ' . $value . '<br>';
}

include 'includes/footer.php';
