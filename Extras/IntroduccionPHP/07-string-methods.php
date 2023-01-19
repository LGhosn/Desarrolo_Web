<?php include 'includes/header.php';

$nombre = "Lautaro";
echo strlen($nombre); // 7
echo str_replace('Lautaro', 'Messi', $nombre); // Messi

// Eliminar espacios en blanco
$frase = "    Contenido    ";
$frase = trim($frase);

// Convertir a mayúsculas
echo strtoupper($frase); // CONTENIDO

// Convertir a minúsculas
echo strtolower($frase); // contenido

// Obtener un caracter
echo $frase[0]; // C

// Obtener la posición de un caracter
echo strpos($frase, 'e'); // 2

// Reemplazar un caracter
echo str_replace('e', 'i', $frase); // Continiido

// Revisar si un string existe
echo strstr($frase, 'ten');

// Concatenar strings
echo "Hola " . "Mundo";
echo "Hola" . $nombre;
echo "Hola $nombre";

include 'includes/footer.php';
