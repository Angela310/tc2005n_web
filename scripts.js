console.log("Hola mundo!");

const colores = ["rojo", "verde", "azul", "amarillo"];
console.log(colores[1]);
colores[2] = "22";
colores.forEach((color) => console.log(color));


let alumno = { nombre: "JuanMa" };
alumno.edad = 22;
console.log(alumno.edad);




const salude = () => {
    console.log("Hola");
  };

  salude();

  function msg(nombre) {
    console.log("Hola " + nombre);
  };

  msg();
  msg("JuanMa");