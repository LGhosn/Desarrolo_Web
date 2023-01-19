<?php include 'includes/header.php';

$contador = 0;
while ($contador <= 10) {
    echo 'El numero es: ' . $contador . '<br>';
    $contador++;
}

do {
    echo 'El numero es: ' . $numero . '<br>';
    $numero++;
} while ($numero <= 10);

// fizzbuzz
for ($i = 0; $i <= 50; $i++) {
    if ($i % 15 === 0) {
        echo $i . ' FizzBuzz <br>';
    } else if ($i % 3 === 0) {
        echo $i . ' Fizz <br>';
    } else if ($i % 5 === 0) {
        echo $i . ' Buzz <br>';
    } else {
        echo $i . '<br>';
    }
}

include 'includes/footer.php';
