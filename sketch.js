const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, ground2, ground3, ground4;
var plinkos=[];
var divisions = [];
var particles = [];
var divisionsHeight = 150;
var particle;

function preload() {
    
}

function setup(){
  createCanvas(800, 800);
    engine = Engine.create();
    world = engine.world;

    for(var j = 40; j<= width; j = j+50){
        plinkos.push(new Plinko(j , 75))
      }
      for(var j = 15; j<= width-10; j = j+50){
        plinkos.push(new Plinko(j ,125))
      }
      for(var j = 40; j<= width-10; j = j+50){
        plinkos.push(new Plinko(j ,175))
      }
      for(var j = 15; j<= width-10; j = j+50){
        plinkos.push(new Plinko(j ,225))
      }
      for(var j = 40; j<= width-10; j = j+50){
        plinkos.push(new Plinko(j ,275))
      }
      for(var j = 15; j<= width-10; j = j+50){
        plinkos.push(new Plinko(j ,325))
      }
      for(var j = 40; j<= width-10; j = j+50){
        plinkos.push(new Plinko(j ,375))
      }
      for(var j = 15; j<= width-10; j = j+50){
        plinkos.push(new Plinko(j ,425))
      }
      for(var k = 0; k <=width; k = k+80){
        divisions.push(new Divisions(k, height-divisionsHeight/2, 10, divisionsHeight));
      }

      ground = new Ground(400, 793, 800, 13);
      ground2=new Ground(5, 400, 9, 800);
      ground3=new Ground(794, 400, 9, 800);
     


}

function draw() { 
    if(frameCount % 60 === 0){
      particle = new Particles(random(120, 500), 0, 7, random(0, 360));
      particles.push(particle);
    }
  
    background("aqua");
     Engine.update(engine);
  
  
  for(var i = 0; i < particles.length; i++){
    particles[i].display();
   }
  
    for(var k = 0; k<divisions.length;k++){
    divisions[k].display();
  }
     for(var j = 0; j<plinkos.length;j++){
      plinkos[j].display();
    
   }
    ground.display();  
    ground2.display();
   ground3.display();
  
    
  }
   

