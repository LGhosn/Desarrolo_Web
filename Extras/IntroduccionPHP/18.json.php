<?php include 'includes/header.php';

$productos = [
    [
        'nombre' => 'Tablet',
        'precio' => 200,
        'disponible' => true
    ],
    [
        'nombre' => 'Monitor 24 pulgadas',
        'precio' => 300,
        'disponible' => true
    ],
    [
        'nombre' => 'Monitor 27 pulgadas',
        'precio' => 400,
        'disponible' => false
    ],
    [
        'nombre' => 'Teclado',
        'precio' => 50,
        'disponible' => true
    ],
    [
        'nombre' => 'Celular',
        'precio' => 700,
        'disponible' => false
    ],
];

$productos_json = json_encode($productos); // convierte un array a un string en formato json
echo '<pre>';
var_dump($productos_json);
echo '</pre>';

$array_json = json_decode($productos_json); // convierte un string en formato json a un array
echo '<pre>';
var_dump($array_json);
echo '</pre>';

include 'includes/footer.php';
