var jardim,coelho;
var imagemdojardim,imagemdocoelho;

var macas,macas_anima
var laranjas,laranjas_anima;
var folhas,folhas_anima;

var sorteio;


function preload(){
  imagemdojardim = loadImage("garden.png");
  imagemdocoelho = loadImage("rabbit.png");
  macas_anima = loadImage("apple.png");
  laranjas_anima = loadImage("orangeLeaf.png");
}


function setup(){
  
  createCanvas(400,400);
  
// Fundo em movimento
jardim=createSprite(200,200);
jardim.addImage(imagemdojardim);

// Criando o menino corredor
coelho = createSprite(180,340,30,30);
coelho.scale =0.09;
coelho.addImage(imagemdocoelho);
  
sorteio = Math.round(random(1,140));
//console.log(sorteio);
}


function draw() {
  background(0);
  
  coelho.x = mouseX;
  
  bordas= createEdgeSprites();
  coelho.collide(bordas);

  
    //console.alert ("isso é um aviso");
  
  criarLaranjas();
  criarMacas();
 
  if(frameCount%90==0)   {
 if(criarMacas ==1){
  criarmacas();
  }
  else
 {
  criarLaranjas();
 }
    
}    
  
  drawSprites();
}

function criarMacas(){
  if(frameCount%80==0)   {
  macas = createSprite(random(50, 350),40, 10, 10);
  macas.velocityY = 2;  
  macas.addImage("apple.png",macas_anima);
  macas.scale = 0.1;
  macas.depth = coelho.depth -1;
  }
}
  
  function criarLaranjas(){
  if(frameCount%150==0) {
  laranjas = createSprite(random(50, 350),40, 10, 10);
  laranjas.velocityY = 2;
  laranjas.addImage("orangeLeaf.png",laranjas_anima);
  laranjas.scale = 0.1;
  laranjas = Math.round(random(50,100))
  coelho.depth =laranjas.depth -1;
  }
}



