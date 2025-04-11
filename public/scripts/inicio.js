// si existe la variable .name es que ya iniciaron sesion, si no regresate a login
// pregunat si existe

window.onload = () => {
    // Verificar si hay un valor en sessionStorage para 'name'
    if (sessionStorage.name) {
        // Si 'name' está en sessionStorage, mostrarlo en el elemento con id="name"
        const name = document.getElementById("name");
        name.innerText = "Name: " + sessionStorage.name;
    } else {
        // Si no se encuentra 'name' en sessionStorage, redirigir a la página de login
        window.location = "../index.html";
    }
};

// LOGOUT - Genera un evento que borra las variables que existen
// Obtener el botón de logout por su ID
const logoutButton = document.getElementById("logout-btn");
// Agregar un evento de clic al botón
logoutButton.addEventListener("click", () => {
    // Eliminar los datos guardados en sessionStorage (si los hay)
    sessionStorage.removeItem("name"); // o sessionStorage.clear() para limpiar todos los datos
    // Redirigir al usuario a la página principal (index.html)
    window.location = "../index.html"; // Cambia la ruta si es necesario
});