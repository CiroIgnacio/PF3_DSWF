// 1. Calcular el área de un rectángulo
function calcularAreaRectangulo(longitud, ancho) {
    return longitud * ancho;
}

// Ejemplos de área de rectángulo
console.log("Solución 1: Área de rectángulo");
console.log("Ejemplo a: Longitud = 5, Ancho = 3"); 
console.log("//Resultado: ", calcularAreaRectangulo(5, 3));  // Resultado: 15
console.log("Ejemplo b: Longitud = 10, Ancho = 4"); 
console.log("//Resultado: ", calcularAreaRectangulo(10, 4)); // Resultado: 40
console.log("Ejemplo c: Longitud = 7, Ancho = 2"); 
console.log("//Resultado: ", calcularAreaRectangulo(7, 2));  // Resultado: 14
console.log("______________");

/* 
Para el cálculo del área del rectángulo, el proceso de pensamiento fue simple:
1. La fórmula del área de un rectángulo es base por altura (o longitud por ancho)
2. La función debe recibir dos parámetros y retornar su producto
3. Se implementó de forma directa usando el operador de multiplicación
4. Se probaron varios ejemplos para verificar la precisión de la función
5. Se podrían haber agreagado validaciones para asegurar que los parámetros sean números (por simplicidad, no se incluyeron)
*/

// 2. Contar palabras en una cadena
function contarPalabras(texto) {
    return texto.trim().split(/\s+/).length;
}

// Ejemplos de contar palabras
console.log("Solución 2: Contar palabras");
console.log("Ejemplo a: 'Humahuaca es un lugar copado'");
console.log("//Resultado: ", contarPalabras("Humahuaca es un lugar copado")); // Resultado: 5
console.log("Ejemplo b: 'JavaScript es divertido'");
console.log("//Resultado: ", contarPalabras("JavaScript es divertido")); // Resultado: 3
console.log("Ejemplo c: '¡Hola     mundo!'");
console.log("//Resultado: ", contarPalabras("¡Hola     mundo!")); // Resultado: 2
console.log("______________");

/* 
Para contar palabras, el proceso fue:
1. Usar trim() para eliminar espacios al inicio y final
2. Utilizar split() con expresión regular para manejar múltiples espacios
3. Retornar la longitud del array resultante
4. Se probaron varios ejemplos para verificar la precisión de la función
*/

// 3. Invertir una cadena
function invertirCadena(texto) {
    return texto.split('').reverse().join('');
}

// Ejemplos de invertir cadena
console.log("Solución 3: Invertir cadena");
console.log("Ejemplo a: 'hola'");
console.log("//Resultado: ", invertirCadena("hola")); // Resultado: "aloh"
console.log("Ejemplo b: 'javascript'");
console.log("//Resultado: ", invertirCadena("javascript")); // Resultado: "tpircsavaj"
console.log("Ejemplo c: '1234'");
console.log("//Resultado: ", invertirCadena("1234")); // Resultado: "4321"
console.log("______________");

/* 
Para invertir la cadena:
1. Convertir la cadena en array de caracteres con split('')
2. Usar reverse() para invertir el array
3. Unir los caracteres nuevamente con join('')
4. Se probaron varios ejemplos para verificar la precisión de la función
5. Se podría haber usado el operador de concatenación para invertir la cadena (pero split y join son más eficientes)
*/

// 4. Encontrar el palíndromo
function esPalindromo(texto) {
    // Convertir a minúsculas y eliminar espacios
    const textoLimpio = texto.toLowerCase().replace(/\s/g, '');
    return textoLimpio === textoLimpio.split('').reverse().join('');
}

// Ejemplos de palíndromos
console.log("Solución 4: Verificar palíndromos");
console.log("Ejemplo a: 'neuquen'");
console.log("//Resultado: ", esPalindromo("neuquen")); // Resultado: true
console.log("Ejemplo b: 'reconocer'");
console.log("//Resultado: ", esPalindromo("reconocer")); // Resultado: true
console.log("Ejemplo c: 'javascript'");
console.log("//Resultado: ", esPalindromo("javascript")); // Resultado: false
console.log("______________");

/* 
Para verificar palíndromos:
1. Limpiar el texto (convertir a minúsculas y eliminar espacios)
2. Usar la misma técnica de inversión que en el ejercicio anterior
3. Comparar el texto original con su versión invertida
4. Se probaron varios ejemplos para verificar la precisión de la función
5. Se podrían haber agregado validaciones para manejar caracteres especiales (por simplicidad, no se incluyeron)
*/

// 5. Edad canina
function edadCanina() {
    const edad = prompt("Ingrese la edad de su perro:");
    const edadHumana = edad * 7;
    console.log(`//Resultado: Tu perro tiene ${edadHumana} años humanos`);
}

// Ejemplos de edad canina
console.log("Solución 5: Calcular edad canina");
// Nota: Los siguientes son ejemplos simulados ya que prompt() es interactivo
console.log("Ejemplo 1: Si ingresamos 7");
console.log("Tu perro tiene 49 años humanos");
console.log("Ejemplo 2: Si ingresamos 3");
console.log("Tu perro tiene 21 años humanos");
console.log("Ejemplo 3: Si ingresamos 5");
console.log("Tu perro tiene 35 años humanos");
console.log("______________");

/* 
Para la edad canina:
1. Usar prompt() para obtener el input del usuario
2. Multiplicar la edad por 7 para obtener la edad en años humanos
3. Mostrar el resultado por consola con un mensaje descriptivo
*/

// Ejecutar todos los ejemplos al cargar la página
window.onload = function() {
    // La función edadCanina() se ejecutará cuando el usuario interactúe con la página
    edadCanina();
}