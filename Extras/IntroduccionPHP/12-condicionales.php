<?php include 'includes/header.php';

$autenticado = true;
$admin = false;

if ($autenticado) {
    echo 'El usuario esta autenticado';
} else {
    echo 'El usuario no esta autenticado';
}
echo '<br>';

if ($autenticado && $admin) { // && = AND
    echo 'El usuario es administrador';
}

if ($autenticado || $admin) { // || = OR
    echo 'El usuario es administrador';
}

if ($autenticado xor $admin) { // xor = OR exclusivo
    echo 'El usuario es administrador';
}

switch ($autenticado) {
    case true:
        echo 'El usuario esta autenticado';
        break;
    case false:
        echo 'El usuario no esta autenticado';
        break;
}

include 'includes/footer.php';
