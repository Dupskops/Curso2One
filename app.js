/*querySelector esta funcion me permite acceder a unos 
elementos del html en conjunto con el document*/

/*Hoisting movimiento de las variables al principio*/

//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Indica un numero del 1 al 10'


let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados= [];
let numeroMaximo = 10;
/*La funcion recibe parametros para utilizarla varias veces*/
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

  console.log(intentos);
if(numeroDeUsuario === numeroSecreto){
  asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1 ? 'vez' : 'veces')}`);
document.getElementById('reiniciar').removeAttribute('disabled');

}else{
    //El usuario no Acerto
  if(numeroDeUsuario > numeroSecreto){
    asignarTextoElemento('p', 'El numero secreto es menor');

  } else{
    asignarTextoElemento('p','El numero secreto es mayor ');
  } 
  intentos++;
 limpiarCaja();
}
return;
}

function limpiarCaja(){
 valorCaja = document.querySelector('#valorUsuario').value = '';
 
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //Si ya sorteamos todos los numeros 
    if(listaNumerosSorteados.length == numeroMaximo){
     asignarTextoElemento('p', 'Ya se sortearon todos los numeros');
    }else{
   //Si el numero generado esta incluido en la lista
   if(listaNumerosSorteados.includes(numeroGenerado)){
    return generarNumeroSecreto();
   }else{
    listaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;
   }
  }  
}

function nuevoIntento(){
    generarNumeroSecreto();
}
function condicionesIniciales(){
asignarTextoElemento('h1','Juego del numero secreto');
asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
 numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

function reiniciarJuego(){
//Limpiar caja
 limpiarCaja();
 //Indicar mensaje de intervalo de numeros
 //Generar numero aleatorio
 //Inicializar el numero de intentos
 condicionesIniciales();
 //Desabilitar el boton del nuevo Juego
document.querySelector('#reiniciar').setAttribute('disabled', 'true')
 
}

condicionesIniciales();
