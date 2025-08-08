// Array para guardar los nombres
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    // Validar que no esté vacío
    if (nombre === "") {
        alert("Por favor, escribe un nombre válido.");
        return;
    }

    // Validar que no se repita (sin importar mayúsculas/minúsculas)
    let nombreNormalizado = nombre.toLowerCase();
    if (amigos.some(amigo => amigo.toLowerCase() === nombreNormalizado)) {
        alert("Ese nombre ya está en la lista.");
        input.value = "";
        return;
    }

    // Agregar el nombre
    amigos.push(nombre);

    // Limpiar input y mostrar lista
    input.value = "";
    mostrarLista();
}

// Función para mostrar la lista
function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("La lista está vacía. Agrega al menos un nombre antes de sortear.");
        return;
    }

    let indice = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indice];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 Tu amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}

// Detectar el envío del formulario (Enter o botón)
document.getElementById("formAmigo").addEventListener("submit", function(event) {
    event.preventDefault();
    agregarAmigo();
});
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
