function seleccionarPokemon(){

    
    elegirPokemon()
}
let pokemon = ""
let ataqueJugador = ""
let mostrarAtaqueJugador
function iniciarJuego(){
    //Escuchar cuando se le de click al boton de seleccionar
    //document, para que revise el documento HTML
    let botonSeleccionarPokemon = document.getElementById("select")

    //Para escuchar los eventos que ocurran con ese botón especifico
    botonSeleccionarPokemon.addEventListener("click", seleccionarPokemon)
    
    //para escuchar los eventos de presionar todos los demas botones de los ataques
    document.getElementById("fire").addEventListener("click", ataqueFuego)
    document.getElementById("water").addEventListener("click", ataqueAgua)
    document.getElementById("ground").addEventListener("click", ataqueTierra)
    mostrarAtaqueJugador = document.getElementById("ataqueJugador")
}

//Para escuchar cualquier elemento que ocurra en el navegador
//el evento load sirve para que se ejecute cuando cargue el HTML
window.addEventListener("load", iniciarJuego )

function elegirPokemon (){
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
        
        console.log("Fuego enemigo")
        //ataqueSeleccionadoEnemigo.innerHTML= "Fuego"
    } else if(aleatorio==2){
        console.log("Agua enemigo")
       // ataqueSeleccionadoEnemigo.innerHTML= "Agua"
    }else if(aleatorio==3){
        console.log("tierra enemigo")
        //ataqueSeleccionadoEnemigo.innerHTML= "Tierra"
    }
}

function ataqueFuego(){
    ataqueJugador= "Fuego"
    console.log(ataqueJugador)
    ataqueEnemigoAleatorio(1,3)
    //mostrarAtaqueJugador.innerHTML = ataqueJugador
}

function ataqueAgua(){
    ataqueJugador= "Agua"
    console.log(ataqueJugador)
    ataqueEnemigoAleatorio(1,3)
    //mostrarAtaqueJugador.innerHTML = ataqueJugador
}

function ataqueTierra(){
    ataqueJugador= "Tierra"
    console.log(ataqueJugador)
    ataqueEnemigoAleatorio(1,3)
    //mostrarAtaqueJugador.innerHTML = ataqueJugador
}