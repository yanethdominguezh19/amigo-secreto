//Declaramos la variable de tipo array
let amigos = [];

//Función para agregar amigos
function agregarAmigo(){
    let amigoInput = document.getElementById('amigo');
    let nombre = amigoInput.value.trim();
    //Validamos la entrada
    if(nombre === ''){
        alert('Por favor, inserte un nombre');
        return;
    }
    //Actualizamos el array de amigos
    amigos.push(nombre);
    //Limpiamos el campo de entrada
    amigoInput.value='';
    //Verificamos que se añadio en la consola
    console.log(amigos);

    //Llamamos la función que actualiza la interfaz
    actualizarLista();
}

//Función para actualizar la lista de amigos
function actualizarLista(){
    let lista = document.getElementById('listaAmigos');
    //Limpiamos la lista existente
    lista.innerHTML='';
    //Iterramos sobre el array y agregamos elementos
    for(let i=0; i<amigos.length; i++){
        let elementoLista = document.createElement('li');
        elementoLista.textContent = amigos[i];
        lista.appendChild(elementoLista);
    }
}

//Función para sortear amigos
function sortearAmigo(){
    let resultado = document.getElementById('resultado');
    //Validamos que haya amigos disponibles
    if(amigos.length===0){
        alert('Por favor, agrega al menos un amigo para sortear');
        return;
    }
    //Generamos un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random()*amigos.length);
    //Obtenemos el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];
    //Mostramos resultado del sorteo
    resultado.innerHTML=`¡El amigo secreto es: ${amigoSorteado}`;
}