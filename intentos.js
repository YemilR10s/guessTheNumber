
let numeroAleatorio = Math.floor(Math.random()*100)+1
let numero = 0

function jugar(){
    /* obtener los valores */
    const valorPantalla = document.getElementById('pantalla').value
    let numeroPantalla = parseInt(valorPantalla)
    numero ++

    if(isNaN(numeroPantalla)|| numeroPantalla < 0 || numeroPantalla > 100){
        mensaje.textContent = "ingrese un valor correcto entre 1 y 100"
        mensaje.style.color = "red"
    }else if(numeroPantalla < numeroAleatorio){
        mensaje.textContent = "!Mas arriba!"
        mensaje.style.color = "red"
    }else if (numeroPantalla > numeroAleatorio){
        mensaje.textContent = "!Mas abajo!"
        mensaje.style.color = "red"
    }else if (numeroPantalla == numeroAleatorio){
        mensaje.textContent = "!Felicidades ganastes!"
        mensaje.style.color = "green"

    }
    intentos.textContent = numero
    

}

