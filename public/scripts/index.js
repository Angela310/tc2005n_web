//console.log("Hola desde javascript");
//alert("Hi queen!");
//prompt("Ingresa tu nombre");
//confirm("¿Quieres salir?");

const boton = document.getElementById("login-btn");
const username = document.getElementById("username-input");
const password = document.getElementById("password-input");
const errorMessage = document.getElementById("error-message"); // El contenedor del mensaje de error

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
