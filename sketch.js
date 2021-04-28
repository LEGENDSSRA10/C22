const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const World = Matter.World;

var ground, engine, engineWorld, ball;

function setup()
 {
  createCanvas(500,500);
  engine = Engine.create()
  engineWorld = engine.world;
  var options =
   {
     isStatic: true
   }
  ground = Bodies.rectangle(250, 480, 500, 20, options);
  World.add(engineWorld, ground);
  var options_ball =
   {
     restitution:1
   }
  ball = Bodies.circle(250, 50, 20, options_ball);
  World.add(engineWorld, ball);
  console.log(ground);
 }

function draw() 
{
  background("black");
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 500, 20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20);
}