//projeto pong Cristian Carlos Martini
//projeto teu futuro / alura



//SONS DO JOGO
let raquetada
let ponto
let trilha
function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound ("ponto.mp3") ; 
 raquetada = loadSound ("raquetada.mp3");
                  
                  }

//PLACAR
let meusPontos=0;
let pontosOponente=0;
let chanceDeErro =0;

//VARIAÇAO DA RAQUETE
let xRaquete = 10;
let yRaquete = 150;
let larguraRaquete = 10;
let alturaRaquete = 90;

let colidiu = false;
let colidiu2 = false;

//VARIAÇAO DA RAQUETE2
let xRaquete2 = 570;
let yRaquete2 = 150;
let velocidadeYoponente;

//VARIAÇAO DA BOLINHA
let xBola = 300;
let yBola = 200;
let diametro = 20;
let raio = diametro / 2;

//VELOCIDADE DA BOLINHA
let velocidadeXBola = 6;
let velocidadeYBola = 6;


function setup() {
  createCanvas(600, 400);
  trilha.play()
}

function draw() {
  background(0);
  velocidadeBola()
  aparenciaBola();
  aparenciaRaquete(xRaquete, yRaquete);
  bordaMapa();
  moverRaquete();
  aparenciaRaquete(xRaquete2, yRaquete2)
 movimentaraquetedooponente()
  verificaColisaoRaquete(xRaquete,yRaquete)
  verificaColisaoRaquete(xRaquete2,yRaquete2)
  incluiplacar()
  marcaponto()
  tempo()
  ChanceDeErrar()
 

}


//APARENCIA DA BOLA
function aparenciaBola (){
  circle(xBola, yBola, diametro)
}

//APARENCIA DA RAQUETE
function aparenciaRaquete (x,y) {
    rect(x, y, larguraRaquete, alturaRaquete);
}


//VELOCIDADE DA BOLA
function velocidadeBola() {xBola += velocidadeXBola;
  yBola += velocidadeYBola;
                          } 


//BORDA DO MAPA
function bordaMapa (){
  
   if (xBola + raio > width || xBola - raio < 0 ) {
    velocidadeXBola *= -1
  }
  if (yBola + raio > height || yBola - raio < 0 ) {
    velocidadeYBola *= -1 }
}


//MOVER RAQUETE
function  moverRaquete(){ 
  
  if(keyIsDown(UP_ARROW)){yRaquete -= 8}
  if(keyIsDown(DOWN_ARROW)){yRaquete += 8}
} 

//MOVIMENTARAQUETEOPONENTE
function movimentaraquetedooponente(){
  velocidadeYOponente = yBola - yRaquete2 - larguraRaquete  /2 -30;
  
  yRaquete2 += chanceDeErro+velocidadeYOponente}

//CHANCE DE ERRO OPONENTE


function ChanceDeErrar(){
  
  if (colidiu){ 
    chanceDeErro+=4
  }
    
  if(pontosOponente>= meusPontos){chanceDeErro+1
  }
  if(timer==200){chanceDeErro*=0};
  if(timer==150){chanceDeErro*=0};
  if(timer==100){chanceDeErro*=0};
  if(timer==50){chanceDeErro*=0}
}

  
//COLISAORAQUETE
  function verificaColisaoRaquete(x,y){
   colidiu = collideRectCircle(x, y, larguraRaquete, alturaRaquete, xBola, yBola, raio);
    if (colidiu){velocidadeXBola *= -1; raquetada.play()}   
  }
  

//PLACAR

function incluiplacar (){
  stroke(255)
  textAlign(CENTER)
  textSize(32)
  fill(color(255,140,0))
  rect(110,5,60,30)
  fill(255) 
  text(meusPontos, 140,31)
  fill(color(255,140,0))
  rect(430,5,60,30)
  fill(255)
  text(pontosOponente, 460, 31) 
  rect (300,55,5,400) 
  rect (300,0,5,28)   
}

function marcaponto() {
    if (xBola > 590) {
        meusPontos += 1 ;
    ponto.play();
    chanceDeErro -=8
    xBola-=30
      
    }
    if (xBola < 10) {
        pontosOponente += 1;
    ponto.play();
      chanceDeErro+=5
      xBola+=20
    }
  
}

//cronometro

let timer = 235
function tempo(){
  textSize(20);
  text(timer, width/2, height/8.2);
    if (frameCount % 60 == 0 && timer > 0) { // if 
    timer --;
  }
  if (timer == 0) {
    if(meusPontos>pontosOponente){text  ("Você perdeu!!" ,width/1.5, height/2) , text  ("Você venceu!!",width/3, height/2)}
  
    if(pontosOponente>meusPontos){text  ("Você perdeu!!" ,width/3, height/2),text  ("Você venceu!!" ,width/1.5, height/2)}
    text("GAME OVER", width/2, height*0.7);
    if(meusPontos==pontosOponente){text ("Empate", width/3,height/2), text("Empate", width/1.5,height/2)}
 
     velocidadeYBola *=0 ,velocidadeXBola *=0, yBola+= 800, xRaquete*=-500
                
  }
}
  