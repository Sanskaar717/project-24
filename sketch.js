
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground;
var wall1,wall2,floor;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	myEngine = Engine.create();
	myWorld = myEngine.world;

	ground = new Ground(400,650);
	wall1 = new Bin(400,600,5,5,PI/2);
  
}


function draw() {
  
  background(0);

  Engine.update(myEngine);

  ground.display();
  wall1.display();

}


