
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,paper;
var wall1,wall2,floor;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	myEngine = Engine.create();
	myWorld = myEngine.world;

	ground = new Ground(400,650);
	floor = new Dustbin(700,640,PI/7);
	wall1 = new Dustbin(750,610,PI);
	wall2 = new Dustbin(650,610,PI);
	paper = new Paper(400,350,1);
  
}


function draw() {
  
  background(0);

  Engine.update(myEngine);

  ground.display();
  floor.display();
  wall1.display();
  wall2.display();
  paper.display();

}


