                    //CODIGO DE PADAWAN NIVEL 1:
//VARIABLES GLOBALES:

let contenedor = document.getElementById("contenedor");
let gusano = document.getElementById("gusano");
let start = document.getElementById("empieza");
let gusanoX = 0;
let gusanoY = 0;
let desplazamiento = 20;

//FUNCION QUE NOS DA EL MOVIMIENTO DEL DIV POR MEDIO DE LOS ESTILOS.
function movGusano(){

  switch (event.key) {
    case "ArrowDown":
        gusanoY += desplazamiento;
          if(gusanoY > 380){
              gameOver();
          }
          else{
            gusano.style.marginTop = gusanoY + "px";  
          }
      break;
    case "ArrowUp":
        gusanoY -= desplazamiento;
          if(gusanoY < 0){
              gameOver();
          }
          else{
              gusano.style.marginTop = gusanoY + "px";
          }
      break;
    case "ArrowLeft":
        gusanoX -= desplazamiento;
          if(gusanoX < 0){
              gameOver();
          }
          else{
              gusano.style.marginLeft = gusanoX + "px";
          }
          
      break;
    case "ArrowRight":
        gusanoX += desplazamiento;
          if(gusanoX > 380){
              gameOver();
          }
          else{
              gusano.style.marginLeft = gusanoX + "px";
          }
      break;
    case "Escape":
        pausa();
      break;
      
  }

}

function gameOver(){
    alert("GAME OVER");
    window.removeEventListener("keydown", movGusano);
}
function iniciarJuego(){
    gusanoX = 0;
    gusanoY = 0;
    gusano.style.marginTop = gusanoY;
    gusano.style.marginLeft = gusanoX;
    window.addEventListener("keydown", movGusano);
}

window.addEventListener("keydown", movGusano);
start.addEventListener("click",iniciarJuego);