// Declaración de variables
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

// Función para asignar texto a elementos
function asginarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

// Función para generar número secreto, excluyendo los generados previamente
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    if(listaNumerosSorteados.length == numeroMaximo){
        asginarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else{
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();    
        } else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

// Función para verificar el intento + contador de intentos
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto){
        asginarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1)? 'vez': 'veces'} `);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto){
            asginarTextoElemento('p', 'El número secreto es menor');
        } else {
            asginarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

// Función para limpiar la caja del input
function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

// Función para volver a las condiciones iniciales del juego
function condicionesIniciales(){
    asginarTextoElemento('h1', 'Juego del número secreto!');
    asginarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos=1;
}

// Función para iniciar un nuevo juego
function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();