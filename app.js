let numeroSecreto=0;
let intentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 5;
 function asignarTextoElemento(Elemento , texto){
 let elementoHTML = document.querySelector(Elemento);
 elementoHTML.innerHTML= texto;
 return;
 }
 console.log(numeroSecreto);

 function verificarIntento(){
    let numeroDeUsuario= parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);
    
    if(numeroDeUsuario===numeroSecreto){
      asignarTextoElemento('p',`Acertaste el numero en:  ${intentos}${(intentos==1)?'vez':'veces'} `);
      document.getElementById('reiniciar').removeAttribute('disabled')
    }else{
      if(numeroDeUsuario>numeroSecreto){
         asignarTextoElemento('p','El numero secreto es menor ');
      }else{
         asignarTextoElemento('p','Elo numero secreto es mayor ');
      }
      intentos++;
      vaciarCaja();

    }
    return;

 }
 function generaNumeroSecreto(){
   let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
   console.log(numeroGenerado);
   console.log(listaNumerosSorteados);
   //si ya sorteamos todos los numeross cerrar
   if(listaNumerosSorteados.length==numeroMaximo){
    asignarTextoElemento(`p`,`Ya se sortearon los numeros posibles`);
   }else{
    //Si el numero generado ya esta en la lista
   if (listaNumerosSorteados.includes(numeroGenerado)){
    //Lllamamos la funciom para volver a crear y decir agregar con push
    return generaNumeroSecreto();
   }else{
    listaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;
   }
 }
}

 function vaciarCaja(){
   let vaciarCaja= document.querySelector('#valorUsuario');
   vaciarCaja.value='';
 }

 function condicionesIniciales(){
   asignarTextoElemento("h1","Juego del numero secreto!");
   asignarTextoElemento(`p`,`Indica un numero del 1 al ${numeroMaximo}`);
   numeroSecreto=generaNumeroSecreto();
   intentos=1;
 }

 function reiniciarJuego(){
   //Limpiar la caja
   vaciarCaja();
   //Indiar mensaje de intervalos de numero
   //Generar el numero aleaotorio
   condicionesIniciales();
   //deshabilitar el boton de neuvo juego
   document.querySelector('#reiniciar').setAttribute('disabled','true');

   

 }
 condicionesIniciales();


 asignarTextoElemento("h1","Juego del numero secreto!");
 asignarTextoElemento("p","Indica un numero del 1 al 100  ");



