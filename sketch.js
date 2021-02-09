const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function setup() {


  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 380, 1200, 20)

  b1 = new Box(900, 370, 30, 40)
  b2 = new Box(900, 350, 30, 40)
  b3 = new Box(900, 330, 30, 40)
  b4 = new Box(900, 300, 30, 40)
  b5 = new Box(900, 270, 30, 40)
  b6 = new Box(900, 250, 30, 40)
  b7 = new Box(900, 230, 30, 40)
  b8 = new Box(900, 200, 30, 40)
  b9 = new Box(800, 350, 30, 40)
  b10 = new Box(800, 350, 30, 40)
  b11 = new Box(800, 350, 30, 40)
  b12 = new Box(800, 350, 30, 40)
  b13 = new Box(800, 350, 30, 40)
  b14 = new Box(700, 350, 30, 40)
  b15 = new Box(700, 350, 30, 40)
  b16 = new Box(700, 350, 30, 40)
  b17 = new Box(700, 350, 30, 40)
  b18 = new Box(700, 350, 30, 40)
  b19 = new Box(700, 350, 30, 40)
  b20 = new Box(700, 350, 30, 40)

  ball = new Ball(500, 100, 50)

  chain = new Chain(ball.body, {x:500, y:100})
}

function draw() {
  background("lightblue");  
  Engine.update(engine);

  ground.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  b16.display();
  b17.display();
  b18.display();
  b19.display();
  b20.display();

  ball.display();

  chain.display();

  drawSprites();
}

function mouseDragged(){
Matter.Body.setPosition(ball.body, {x:mouseX, y:mouseY})

}