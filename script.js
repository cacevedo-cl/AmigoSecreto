let names = [];

function validarNombre(input) {
    const regex = /^[A-Za-z]*$/; // Expresión regular para letras
    if (!regex.test(input.value)) {
        input.value = input.value.replace(/[^A-Za-z]/g, ''); // Elimina caracteres no permitidos
    }
}

document.getElementById('AddNombre').addEventListener('click',    
function () {
    const nameInput = document.getElementById('Nombre');
    const name = nameInput.value.trim();

    if (name) {
        names.push(name);
        ActualizarLista();
        nameInput.value = ''; // Limpiar el campo de entrada
    } else {
        alert('¡¡¡Por favor, ingrese un nombre valido!!!');
    }
});

document.getElementById('Sorteo').addEventListener('click', 
function () {
    if (names.length === 0) {
        alert('No hay nombres para sortear!!!');
        return;
    }

    const NombreAleatorio = Math.floor(Math.random() * names.length);
    const winner = names[NombreAleatorio];
    document.getElementById('AmigoSecreto').textContent = winner;

    // Eliminar el ganador de la lista
    names.splice(NombreAleatorio, 1);
    ActualizarLista();
});

function ActualizarLista() {
    const nameList = document.getElementById('Lista');
    nameList.innerHTML = ''; // Limpiar la lista actual

    names.forEach(function (name) {
        const li = document.createElement('li');
        li.textContent = name;
        nameList.appendChild(li);
    });
}