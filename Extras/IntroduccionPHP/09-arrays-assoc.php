<?php include 'includes/header.php';

// Asociativos
$clientes = [
    'cliente1' => [
        'nombre' => 'Juan',
        'saldo' => 200
    ],
    'cliente2' => [
        'nombre' => 'Pedro',
        'saldo' => 100
    ],
    'cliente3' => [
        'nombre' => 'Karen',
        'saldo' => 500
    ]
];

echo '<pre>';
var_dump($clientes);
echo '</pre>';

include 'includes/footer.php';
