<?php include 'includes/header.php';

// empty() - evalua si una variable esta vacia
$vacio = [];
$lleno = [1, 2, 3];
$nombres = ['Juan', 'Pedro', 'Karen'];
empty($vacio); // true
empty($lleno); // false

// isset() - evalua si una variable esta definida
isset($vacio); // true
isset($noExiste); // false
isset($nombres['Juan']); // true
isset($nombres['NoExiste']); // false

include 'includes/footer.php';
