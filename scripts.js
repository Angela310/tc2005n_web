// Saludo general
console.log("Hola mundo!");

// Arreglo de colores
const colores = ["rojo", "verde", "azul", "amarillo"];
console.log("Color en la posición 1:", colores[1]); // Muestra el color verde

// Cambiar un valor en el arreglo
colores[2] = "22"; // Cambia "azul" por "22"
console.log("Colores después del cambio:");
colores.forEach((color, index) => console.log(`Color en la posición ${index}: ${color}`));

// Objeto alumno con propiedades
let alumno = { nombre: "JuanMa", edad: 22 };
alumno.edad = 23; // Modificando la edad
console.log("Edad del alumno:", alumno.edad);

// Función flecha de saludo
const salude = () => {
    console.log("Hola");
};

salude(); // Llama a la función salude

// Función con parámetros y valor predeterminado
function msg(nombre = "Desconocido") { // Parámetro con valor predeterminado
    console.log("Hola " + nombre);
}

msg(); // Llama a msg sin parámetros
msg("JuanMa"); // Llama a msg con el nombre "JuanMa"

// Variables y objetos
let crossOriginIsolated = true;
console.log("¿La página está aislada por CORS?:", crossOriginIsolated);

let usuario = {
  nombre: "Pedro",
  edad: 30,
  saludar: function() {
    console.log("Hola, soy " + this.nombre);
  }
};

usuario.saludar(); // Llama al método 'saludar' del objeto usuario

// Ejemplo de uso de objetos anidados
let empleado = {
  nombre: "Ana",
  puesto: "Desarrolladora",
  direccion: {
    calle: "Calle Valle Encantado Oriente",
    ciudad: "Guadalupe",
    pais: "Mexico"
  },
  detalles: function() {
    console.log(`${this.nombre} trabaja como ${this.puesto} en ${this.direccion.ciudad}`);
  }
};

empleado.detalles(); // Llama al método detalles que muestra la información del empleado

// Uso de arrays y funciones adicionales
const numeros = [10, 20, 30, 40];
const suma = numeros.reduce((total, numero) => total + numero, 0);
console.log("La suma de los números es:", suma);

// Función que manipula datos de un arreglo
const cuadradoDeNumeros = (arr) => arr.map(num => num * num);
console.log("Cuadrados de los números:", cuadradoDeNumeros([1, 2, 3, 4, 5]));

// Definir una función que devuelve un objeto
const crearPersona = (nombre, edad) => ({ nombre, edad });
const persona = crearPersona("Carlos", 28);
console.log("Persona creada:", persona);

// Función con parámetros de tipo objeto
const mostrarInfoPersona = ({ nombre, edad }) => {
  console.log(`${nombre} tiene ${edad} años.`);
};

mostrarInfoPersona(persona); // Imprime "Carlos tiene 28 años."
