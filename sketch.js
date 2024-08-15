let xb = 300;
let yb = 200;
let vxb = 6;
let vyb = 6;
let diametro = 15;
let raio = diametro/2

let xr = 5;
let yr = 150;
let ar = 80;
let lr = 7;

let xri = 585;
let yri = 150;

let colidiu = false;

let meuspontos = 0;
let pontosoponente = 0;

let trilha;
let raquete;
let ponto;

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function preload(){
  trilha=loadSound("trilha.mp3");
  raquetada=loadSound("raquetada.mp3");
  ponto=loadSound("ponto.mp3");
}

function draw() {
  background(0);
  mostrabola();
  mexebola();
  quicabola();
  mostraraquete(xr,yr);
  mostraraquete(xri,yri);
  mexeraquete();
  mexeraqueteinimiga();
  quicaraquetebola(xr,yr);
  quicaraquetebola(xri,yri);
  placar();
  pontos();
  letras();
  stroke("white");
  rect(300,0,1,400);
}

function mostrabola(){
  circle(xb,yb,diametro);
}

function mexebola(){
  xb += vxb;
  yb += vyb;
}

function quicabola(){
  if (xb + raio > width || xb - raio < 0){
    vxb *= -1;
  }
  
   if (yb + raio > height || yb - raio < 0){
    vyb *= -1;
  }
}

function mostraraquete(x,y){
  rect(x,y,lr,ar)
}
function mexeraquete(){
  if (keyIsDown(DOWN_ARROW))
    yr += 10;
  
  if (keyIsDown(UP_ARROW))
    yr -= 10;
}

function mexeraqueteinimiga(){
  if (keyIsDown(83)) //w
    yri += 10;
  
  if (keyIsDown(87)) //s
    yri -= 10;
}

function quicaraquetebola(x,y){
  colidiu = collideRectCircle(x,y,lr,ar,xb,yb,raio);
  
  if (colidiu){
    vxb *= -1
    raquetada.play();
  }
  
}

function placar(){
stroke("pink");
  textAlign(CENTER);
  textSize(16);
  fill("white");
  rect(150,10,40,20);
  fill ("white");
  text(meuspontos,170,15);
  
  stroke("lightpink");
  textAlign(CENTER);
  textSize(16);
  rect(430,10,40,20);
  fill("white");
  text(pontosoponente,450,15);
  
}

function pontos(){
  if (xb>590){
    meuspontos+=1;
    ponto.play();
  }
  if (xb<11){
    pontosoponente+=1;
    ponto.play();
  }
}

function letras(){
  let frase = "MEUS PONTOS";
  let frase2 = "PONTOS OPONENTE";
  textSize(20);
  textAlign(LEFT,TOP);
  fill("white");
  text(frase,95,40);
  
  textSize(20);
  textAlign(LEFT,TOP);
  fill("white");
  text(frase2,340,40);
}

