//console.log("Hola desde javascript");
//alert("Hi queen!");
//prompt("Ingresa tu nombre");
//confirm("¿Quieres salir?");

const boton = document.getElementById("login-btn");
const username = document.getElementById("username-input");
const password = document.getElementById("password-input");
const errorMessage = document.getElementById("error-message"); // El contenedor del mensaje de error

const login = async () => {
    // Verificar si los campos están vacíos
    if (username.value === "" || password.value === "") {
        errorMessage.style.display = "block"; // Mostrar el cuadro de error
        document.getElementById("error-text").innerText = "Por favor, ingresa usuario y contraseña"; // Mensaje de error
        return;
    }

    // Verificar credenciales
    const credentials = { username: username.value, password: password.value };
    const data = await fetch("http://localhost:5001/login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(credentials),
    });

    const res = await data.json();

    // Validar las credenciales
    if (res.isLogin) {
        console.log("le diste click a login");
        console.log("Username: " + username.value + "\nPassword: " + password.value);

        // Si las credenciales son correctas
        sessionStorage.setItem("name", res.user.name); // Guardar el nombre en sessionStorage
        sessionStorage.setItem("id", res.user.id); // Guardar el ID en sessionStorage
        window.location = "./paginas/inicio.html"; // Redirigir a la página de inicio
    } else {
        // si el login es incorrecto
        errorMessage.style.display = "block"; // Mostrar el cuadro de error
        document.getElementById("error-text").innerText = "Usuario o contraseña incorrectos"; // Mensaje de error
        console.log("Credenciales incorrectas");
    }
};

boton.addEventListener("click", login);

// Detectar cuando se presiona la tecla Enter
document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        // Añadir la clase hover al botón para que cambie el estilo
        boton.classList.add("hover");
        
        // Ejecutar la función de login cuando se presiona Enter
        login();
        
        // Opcional: Eliminar la clase hover después de un corto intervalo para restaurar el estilo normal
        setTimeout(() => {
            boton.classList.remove("hover");
        }, 200); // El tiempo puede ajustarse
    }
});

boton.addEventListener("click", login);


/*
const login = () => {
    // Verificar si los campos están vacíos
    if (username.value === "" || password.value === "") {
        errorMessage.style.display = "block"; // Mostrar el cuadro de error
        document.getElementById("error-text").innerText = "Por favor, ingresa usuario y contraseña"; // Mensaje de error
        return;
    }

    // Validar las credenciales
    console.log("le diste click a login");
    console.log("Username: " + username.value + "\nPassword: " + password.value);

    // Si las credenciales son correctas (opción 1 o opción 2)
    if (
        (username.value === "Angela" && password.value === "A01286354") || 
        (username.value === "Mache" && password.value === "A01286303")
    ) {
        console.log("Login exitoso");
        sessionStorage.setItem("name", username.value); // Guardar el nombre en sessionStorage
        window.location = "paginas/inicio.html"; // Redirigir a la página de inicio

    } else {
        // Si las credenciales son incorrectas
        errorMessage.style.display = "block"; // Mostrar el cuadro de error
        document.getElementById("error-text").innerText = "Usuario o contraseña incorrectos"; // Mensaje de error
        console.log("Credenciales incorrectas");
    }
};
boton.addEventListener("click", login);
*/


