function seleccionarPokemon(){

    
    elegirPokemon()
}

//arreglo para guardar los nombres de los mokepones
let pokemones = []
let pokemon = ""
let ataqueJugador = ""
let mostrarAtaqueJugador
let AtaqueEnemigo
let combateFinal
let vidasJugadorPokemon = 3
let vidasEnemigoPokemon = 3

let opcionDeMokepones 
let pikachu
let squirtle
let bulbasaur

const contenerTarjetas = document.getElementById("contenedorTarjetas")
const botonSeleccionarPokemon = document.getElementById("select")

const pokemonSeleccionadoJugador = document.getElementById("pokemonJugador")
const pokemonSeleccionadoEnemigo = document.getElementById("pokemonEnemigo")
const ataqueSeleccionadoEnemigo = document.getElementById("ataqueEnemigo")
let seccionAtaques = document.getElementById("resultadoGanador")
const seccionAtaquesJugador = document.getElementById("ataquesJugador")
const seccionAtaquesEnemigo = document.getElementById("ataquesEnemigo")
const vidasEnemigoPokemonModificar= document.getElementById("vidasEnemigo")
const vidasJugadorPokemonModificar= document.getElementById("vidasJugador")

//para crear a los mokepones como objetos
class Mokepones{
    constructor(nombre, foto, vida){
        //Para decirle cual va a ser el nombre de cada una de sus propiedades
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataque = []
    }

}

let Mokeponpikachu = new Mokepones("Pikachu", "./assets/pikachu.png", 5)
let Mokeponbulbasaur = new Mokepones("Bulbasaur", "./assets/bulbasaur.png", 5)
let Mokeponsquirtle = new Mokepones("Squirtle", "./assets/squirtle.webp", 5)

//Objetos literalessolo van a guardar informacion
Mokeponbulbasaur.ataque.push(
    {nombre: "Látigo Cepa 🌱 ", id:"botonLatigoCepa"},
    {nombre: "Rayo Solar 🌱 ", id: "botonRayoSolar"},
    {nombre: "Bomba Lodo 🍄 ", id: "botonBombaLodo"},
)
Mokeponsquirtle.ataque.push(
    {nombre: "Hidrobomba 💧 ", id:"botonHidrobomba"},
    {nombre: "Cabezazo ● ", id: "botonCabezazo"},
    {nombre: "Burbuja 💧 ", id: "botonBurbuja"},
)
Mokeponpikachu.ataque.push(
    {nombre: "Agilidad 🌀 ", id:"botonAgilidad"},
    {nombre: "Impactrueno ⚡️ ", id: "botonImpactrueno"},
    {nombre: "Ataque rápido ● ", id: "botonAtaqueRapido"},
)

pokemones.push(Mokeponpikachu, Mokeponbulbasaur, Mokeponsquirtle)



function iniciarJuego(){
    //Para ocultar los ataques al inicio
    document.getElementById("selectAtack").style.display = "none"
    document.getElementById("restart").style.display= "none"

    //Por cada mokepon que hay en el arreglo, haz lo siguiente
    pokemones.forEach((pokemon)=>{
    
        //template iterario para implementar HTML con  JS
        //agregué signo de acento para que todo lo considerara texto
        opcionDeMokepones = `<input type="radio" name="mascota" id=${pokemon.nombre} /> 
        <label class="tarjetas" for=${pokemon.nombre}>
        <p> ${pokemon.nombre} </p>
        <img src=${pokemon.foto} alt=${pokemon.nombre}>
        </label>`
        contenerTarjetas.innerHTML += opcionDeMokepones
        pikachu = document.getElementById("Pikachu")
        squirtle  = document.getElementById("Squirtle")
        bulbasaur = document.getElementById("Bulbasaur")
    })

    //Escuchar cuando se le de click al boton de seleccionar
    //document, para que revise el documento HTML
   

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
    //Modifico este tipo de display para que se ajuste al flex
    document.getElementById("selectAtack").style.display = "flex"
    //Agrego para todos los INPUTS para detectar si han sido seleccionados o no
    
    if(pikachu.checked == true){
        pokemon = "Pikachu"
        console.log(pokemon)
        alert("Seleccionaste a Pikachu " )
        //para que se muestre el nombre dle pokemon seleccionado
        pokemonSeleccionadoJugador.innerHTML = pikachu.id
    }else if(squirtle.checked == true){
        pokemon = "Squirtle"
        console.log(pokemon)
        alert("Seleccionaste a Squirtle " )
        pokemonSeleccionadoJugador.innerHTML = squirtle.id
    }else if(bulbasaur.checked == true){
        pokemon = "Bulbasaur"
        console.log(pokemon)
        alert("Seleccionaste a Bulbasaur " )
        pokemonSeleccionadoJugador.innerHTML = bulbasaur.id
    } else{
        alert("Selecciona un Pokemon")
    }
    enemigoAleatorio(1,3)

}

function enemigoAleatorio(min,max){
    let aleatorio = Math.floor(Math.random()*(max-min+1)+min)
    if(aleatorio==1){
        //Pikachu
        pokemonSeleccionadoEnemigo.innerHTML= "Pikachu"
    } else if(aleatorio==2){
        pokemonSeleccionadoEnemigo.innerHTML= "Squirtle"
    }else if(aleatorio==3){
        pokemonSeleccionadoEnemigo.innerHTML= "Bulbasaur"
    }
}

function ataqueEnemigoAleatorio(min,max){
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

    //voy a cambiar la sección donde se motrara el mensaje de si ganó o èrdio
    //var seccionAtaques = document.getElementById("mensajes")
    seccionAtaques.innerHTML = ""
    var parrafoJugador = document.createElement("p")
    var parrafoEnemigo = document.createElement("p")
    parrafoResultado = document.createElement("p")

    parrafoJugador.innerHTML = ataqueJugador
    parrafoEnemigo.innerHTML = AtaqueEnemigo
    parrafoResultado.innerHTML = final


    //Si lo agrego directamente como parrafo, no necesito agregar el append Child
    seccionAtaques.appendChild(parrafoResultado)
    seccionAtaquesJugador.appendChild(parrafoJugador)
    seccionAtaquesEnemigo.appendChild(parrafoEnemigo)


    //entre comillas le decimos cual es el tipo de etiqueta HTML que queremos mostrar
    //var parrafo = document.createElement("p")
    //parrafo.innerHTML = "Tu mascota atacó con"+ ataqueJugador+" el enemigo atacó con "+ AtaqueEnemigo + " " + final
    //seccionAtaques.appendChild(parrafo)
}

//Para saber si ganamos o perdimos
function combate (){
   
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
    //entre comillas le decimos cual es el tipo de etiqueta HTML que queremos mostrar
    var parrafo = document.createElement("p")
    parrafoResultado.innerHTML = mensajeFinal
    //seccionAtaques.appendChild(parrafo)
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