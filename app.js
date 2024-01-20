/* let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();

*/

//1
let listaGenerica = [];


//2
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
console.log(lenguagesDeProgramacion);


//3
lenguagesDeProgramacion.push("Java");
lenguagesDeProgramacion.push("Ruby");
lenguagesDeProgramacion.push("GoLang");
console.log(lenguagesDeProgramacion);

//4
function mostrarLenguages() {
    for (let i = 0; i < lenguagesDeProgramacion.length; i++) {
      console.log(lenguagesDeProgramacion[i]);
    }
  }
mostrarLenguages();

//5
function mostrarLenguagesReves() {
    for (let i = lenguagesDeProgramacion.length - 1; i >= 0; i--) {
      console.log(lenguagesDeProgramacion[i]);
    }
  }
mostrarLenguagesReves();

//6
function calcularMedia(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
      suma += lista[i];
    }
    return suma / lista.length;
  }
  
  let numeroso = [10, 20, 30, 40, 50, 60];
  let media = calcularMedia(numeroso);
  console.log('Média:', media);

//7
function encontrarMayorMenor(lista) {
    let mayor = lista[0];
    let menor = lista[0];
  
    for (let i = 1; i < lista.length; i++) {
      if (lista[i] > mayor) {
        mayor = lista[i];
      }
      if (lista[i] < menor) {
        menor = lista[i];
      }
    }
  
    console.log('Mayor:', mayor);
    console.log('Menor:', menor);
  }
  
  let numeros = [15, 8, 25, 58, 12];
  encontrarMayorMenor(numeros);