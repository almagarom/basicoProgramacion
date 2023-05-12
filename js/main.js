function seleccionarPokemon(){

    
    elegirPokemon()
}
let pokemon = ""
let ataqueJugador = ""
let mostrarAtaqueJugador
let AtaqueEnemigo
let combateFinal
let vidasJugadorPokemon = 3
let vidasEnemigoPokemon = 3
function iniciarJuego(){
    //Para ocultar los ataques al inicio
    document.getElementById("selectAtack").style.display = "none"
    document.getElementById("restart").style.display= "none"


    //Escuchar cuando se le de click al boton de seleccionar
    //document, para que revise el documento HTML
    let botonSeleccionarPokemon = document.getElementById("select")

    //Para escuchar los eventos que ocurran con ese botón especifico
    botonSeleccionarPokemon.addEventListener("click", seleccionarPokemon)
    
    //para escuchar los eventos de presionar todos los demas botones de los ataques
    document.getElementById("fire").addEventListener("click", ataqueFuego)
    document.getElementById("water").addEventListener("click", ataqueAgua)
    document.getElementById("ground").addEventListener("click", ataqueTierra)
    document.getElementById("restartear").addEventListener("click", reiniciarJuego)
    mostrarAtaqueJugador = document.getElementById("ataqueJugador")
}

//Para escuchar cualquier elemento que ocurra en el navegador
//el evento load sirve para que se ejecute cuando cargue el HTML
window.addEventListener("load", iniciarJuego )

function elegirPokemon (){
    document.getElementById("selectMokepon").style.display = "none"
    document.getElementById("selectAtack").style.display = "block"
    //Agrego para todos los INPUTS para detectar si han sido seleccionados o no
    let pikachu = document.getElementById("pikachu")
    let rhydon  = document.getElementById("rhydon")
    let charizard = document.getElementById("charizard")
    let pokemonSeleccionadoJugador = document.getElementById("pokemonJugador")

    let pokemon = ""
    if(pikachu.checked == true){
        pokemon = "Pikachu"
        console.log(pokemon)
        alert("Seleccionaste a Pikachu " )
        //para que se muestre el nombre dle pokemon seleccionado
        pokemonSeleccionadoJugador.innerHTML = pokemon
    }else if(rhydon.checked == true){
        pokemon = "Rhydon"
        console.log(pokemon)
        alert("Seleccionaste a Rhydon " )
        pokemonSeleccionadoJugador.innerHTML = pokemon
    }else if(charizard.checked == true){
        pokemon = "Charizard"
        console.log(pokemon)
        alert("Seleccionaste a Charizard " )
        pokemonSeleccionadoJugador.innerHTML = pokemon
    } else{
        alert("Selecciona un Pokemon")
    }
    enemigoAleatorio(1,3)

}

function enemigoAleatorio(min,max){
    let pokemonSeleccionadoEnemigo = document.getElementById("pokemonEnemigo")
    let aleatorio = Math.floor(Math.random()*(max-min+1)+min)
    if(aleatorio==1){
        //Pikachu
        pokemonSeleccionadoEnemigo.innerHTML= "Pikachu"
    } else if(aleatorio==2){
        pokemonSeleccionadoEnemigo.innerHTML= "Rhydon"
    }else if(aleatorio==3){
        pokemonSeleccionadoEnemigo.innerHTML= "Charizard"
    }
}

function ataqueEnemigoAleatorio(min,max){
    let ataqueSeleccionadoEnemigo = document.getElementById("ataqueEnemigo")
    let aleatorio = Math.floor(Math.random()*(max-min+1)+min)
    if(aleatorio==1){
        AtaqueEnemigo = "Fuego"
        console.log("Fuego enemigo")
        //ataqueSeleccionadoEnemigo.innerHTML= "Fuego"
    } else if(aleatorio==2){
        AtaqueEnemigo = "Agua"
        console.log("Agua enemigo")
       // ataqueSeleccionadoEnemigo.innerHTML= "Agua"
    }else if(aleatorio==3){
        AtaqueEnemigo = "Tierra"
        console.log("tierra enemigo")
        //ataqueSeleccionadoEnemigo.innerHTML= "Tierra"
    }
}

function ataqueFuego(){
    ataqueJugador= "Fuego"
    console.log(ataqueJugador)
    ataqueEnemigoAleatorio(1,3)
    combate()
    //mostrarAtaqueJugador.innerHTML = ataqueJugador
}

function ataqueAgua(){
    ataqueJugador= "Agua"
    console.log(ataqueJugador)
    ataqueEnemigoAleatorio(1,3)
    combate()
    //mostrarAtaqueJugador.innerHTML = ataqueJugador
}

function ataqueTierra(){
    ataqueJugador= "Tierra"
    console.log(ataqueJugador)
    ataqueEnemigoAleatorio(1,3)
    combate()
    //mostrarAtaqueJugador.innerHTML = ataqueJugador
}

//agrego nueva funcion para enviar los ataques que está haciendo cada uno, el jugador y el enemigo
function createMessage(final){
    //para que sepa donde se va a mostrar
    var seccionAtaques = document.getElementById("mensajes")


    //entre comillas le decimos cual es el tipo de etiqueta HTML que queremos mostrar
    var parrafo = document.createElement("p")
    parrafo.innerHTML = "Tu mascota atacó con"+ ataqueJugador+" el enemigo atacó con "+ AtaqueEnemigo + " " + final
    seccionAtaques.appendChild(parrafo)
}

//Para saber si ganamos o perdimos
function combate (){
    vidasEnemigoPokemonModificar= document.getElementById("vidasEnemigo")
    vidasJugadorPokemonModificar= document.getElementById("vidasJugador")
    if(ataqueJugador == AtaqueEnemigo){
        combateFinal= "EMPATE"
    } else if(ataqueJugador== "Fuego" && AtaqueEnemigo== "Tierra"){
        combateFinal = "GANASTE"
        vidasEnemigoPokemon -= 1
    }else if(ataqueJugador== "Agua" && AtaqueEnemigo== "Fuego"){
        combateFinal = "GANASTE"
        vidasEnemigoPokemon -= 1
    }else if(ataqueJugador== "Tierra" && AtaqueEnemigo== "Agua"){
        combateFinal = "GANASTE"
        vidasEnemigoPokemon -= 1
    }
    else{
        combateFinal = "PERDISTE"
        vidasJugadorPokemon -= 1
    }
    console.log(combateFinal)
    createMessage(combateFinal)
    vidasEnemigoPokemonModificar.innerHTML = vidasEnemigoPokemon
    vidasJugadorPokemonModificar.innerHTML = vidasJugadorPokemon

    revisarVidas()
}

function revisarVidas (){
    if(vidasEnemigoPokemon == 0){
        alert("GANASTE!!!!")
        createMessageFinal("Felicitaciones! Ganaste!!")
    }else if(vidasJugadorPokemon == 0){
        alert("PERDISTE!!!")
        createMessageFinal("Lástima! Perdiste!! 😔")
    }
}


//Para enviar el mensaje del resultado final
function createMessageFinal(mensajeFinal){
    //para que sepa donde se va a mostrar
    var seccionAtaques = document.getElementById("mensajes")


    //entre comillas le decimos cual es el tipo de etiqueta HTML que queremos mostrar
    var parrafo = document.createElement("p")
    parrafo.innerHTML = mensajeFinal
    seccionAtaques.appendChild(parrafo)
    //Para deshabilitar los botones de los ataques cuando ya no se tengan vidas
    document.getElementById("fire").disabled = true
    document.getElementById("water").disabled = true
    document.getElementById("ground").disabled = true

    document.getElementById("restart").style.display= "block"
}

function reiniciarJuego(){
    //location.reload: se refiere a la ubicación
    //Funciona para recargar la página
    location.reload()
}