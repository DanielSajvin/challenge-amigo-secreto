let listaNombres = []
let amigoSecreto = 0

function obtenerNombres() {
    let nombre = document.getElementById('amigo').value;
    console.log(nombre);

    // si no ingresa un nombre salta la alerta
    if (nombre == '') {
        alert('Por favor, inserta un nombre');
    } else {
        // de lo contrario significa que si ingresó un nombre y puede continuar
        listaNombres.push(nombre);
        limpiarCaja();
        console.log(listaNombres);
        listarNombres();

    }
}


function listarNombres() {
    let listaAmigos = document.getElementById('listaAmigos')

    // limpio antes de cualquier proceso, esto para evitar duplicados 
    listaAmigos.innerHTML = ''

    for (let index = 0; index < listaNombres.length; index++) {
        //console.log(index)
        const nombre = listaNombres[index];

        // creando el elemento lista
        let item = document.createElement('li');
        item.textContent = nombre;

        // añadiendo el elemento al contendor 
        listaAmigos.appendChild(item);
        
    }
}


function sortearAmigo() {
    if (listaNombres.length == 0) {
        alert('Lista de amigos vacía, no se puede hacer el sorteo :(')
    } else {
        // genera un indice aleatorio para seleccionar ese indice en el array
        amigoSecreto = Math.floor(Math.random()*listaNombres.length);

        // obtengo el nombre que corresponde al indice generado aleatoriamente 
        let seleccionado = listaNombres[amigoSecreto];

        let amigoSeleccionado = document.getElementById('resultado');
        amigoSeleccionado.innerHTML = '';

        // crear un nuevo elemento de lista
        let item = document.createElement('li');

        item.textContent = seleccionado;
        
        amigoSeleccionado.appendChild(item);
    }

}

function limpiarCaja() {
    document.getElementById('amigo').value='';
}
