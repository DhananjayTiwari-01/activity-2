const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine , world ;
var ball;
var ground;



function setup() {
  var canvas = createCanvas(800,400);

engine = Engine.create();
world  = engine.world

var ball_option = {

  restitution: 1.5
}

var ground_option = {

  isStatic:true
  
  

}

// ball = Bodies.circle(40,56,34,option);
// World.add(world,ball);

// ball2 = Bodies.circle(110,56,34,option);
// World.add(world,ball2);

ball = Bodies.circle(200,50,20,ball_option);
World.add(world,ball);


ground = Bodies.rectangle(200,390,200,20,ground_option);
World.add(world,ground);




}

function draw() {
  background(255,255,255);
  Engine.update(engine);
  
  // ellipse(ball.position.x,ball.position.y,60,56);
  // ellipse(ball2.position.x,ball2.position.y,60,56);

  

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);

 
  

  
  drawSprites();
}