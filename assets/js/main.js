//ejercicio 2 

// en el ejercicio 2 se crean dos variables con sus respectivos valores
var number1 = parseInt(prompt("ingrese primer número entero: "));
var number2 = parseInt (prompt("ingrese segundo número entero: "));
// Se suman ambas variables y  Se muestra el resultada document
document.write ('La suma de ambos números es: '+(number1 + number2)+'<br>');
// Se resta ambas variables y  Se muestra el resultada document
document.write ('La resta de ambos números es: '+(number1- number2 )+'<br>');
// Se multiplica ambas variables y  Se muestra el resultada document
document.write ('La multiplicación de ambos números es: '+(number1 * number2)+'<br>');
// Se divide ambas variables y  Se muestra el resultada document
document.write ('La división de ambos números es: '+ (number1 /number2).toFixed(2)+'<br>');
// Se divide ambas variables y  Se muestra el resto de la division en el  document
document.write ('El módulo entre ambos números es: '+ (number1 % number2).toFixed(2)+'<br>')

//ejercicio3

// en el ejercicio 3 se crean una variables con sus respectivos valores
var gradosCelsius = parseFloat (prompt("ingresar la temperatura en grados Celsius : "));
// la variables se suman con el valor kelvin
var resultado = parseFloat(gradosCelsius) + 273.15 ;
//redondeando a un número específico de decimales.
var total= resultado.toFixed(2);
// Se muestra el resultado en document
document.write ('La temperatura en grados kelvin es: '+total+'<br>');
// la variables se multiplica , divide y se suma el valor fahrenheit
var resultado1 = (parseFloat(gradosCelsius)*9/5)  + 32 ;
//redondeando a un número específico de decimales.
var total2= resultado1.toFixed(2);
// Se muestra el resultado en document
document.write ('La temperatura en grados fahrenheit es: '+total2+'<br>');

//ejercicio 4

// en el ejercicio 4 se crean unas variables con sus respectivos valores
let days = parseInt(prompt("Ingrese una cantidad de días"));
// crea variable realiza el calculo Math.floor devuelve el máximo entero menor o igual a un número 
let years = Math.floor(days / 365);
let weeks = Math.floor((days % 365) / 7);
let day = Math.floor((days % 365) % 7);
// Se muestra el resultado en document
document.write(`${days} días equivalen a ${years} años, ${weeks} semanas y ${day} dias`, '<br>');


//ejercicio 5

// en el ejercicio 5 se crean una variables con sus respectivos valores
let num1 = parseFloat (prompt("ingrese primer número: "));
let num2 = parseFloat(prompt("ingrese segundo número: "));
let num3 = parseFloat (prompt("ingrese tecero número: "));
let num4 = parseFloat (prompt("ingrese cuarto número: "));
let num5 = parseFloat (prompt("ingrese quinto número: "));
//realiza el cálculo y se muestra el resultado en document
document.write ('La suma de todos los números es: '+(num1 + num2 + num3 + num4 + num5)+ '<br>');
//realiza el cálculo y se muestra el resultado en document toFixed redondeando a un número específico de decimales.
document.write ('El promedio de todos los números es: '+ (((num1 + num2+ num3+ num4+ num5)/5).toFixed(2))+'<br)');