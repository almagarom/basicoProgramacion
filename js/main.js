alert("hola a todos")

//Escuchar cuando se le de click al boton de seleccionar
//document, para que revise el documento HTML
let botonSeleccionarPokemon = document.getElementById("select")


//Para escuchar los eventos que ocurran con ese botón especifico
botonSeleccionarPokemon.addEventListener("click", seleccionarPokemon)

function seleccionarPokemon(){
    alert("Pokemon seleccionado")
}
