const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var base,ball,chain;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
    world = engine.world;

  base= Bodies.rectangle(400,100,250,20);
 // base.shapeColor=("pink");
  World.add(world, base);

  ball= Bodies.rectangle(400,300,50,50);
 // ball.shapeColor=("purple");
  World.add(world, ball);

  var options = {
    bodyA: ball.body,
    bodyB: base.body,
    stiffness: 0.04,
    length: 10
}
chain = Constraint.create(options);
World.add(world, chain);
}

/*class Chain{
  constructor(bodyA, bodyB){
      var options = {
          bodyA: ball,
          bodyB: base,
          stiffness: 0.04,
          length: 10
      }
      this.chain = Constraint.create(options);
      World.add(world, this.chain);
  }

  display(){
      var pointA = this.chain.bodyA.position;
      var pointB = this.chain.bodyB.position;
      strokeWeight(4);
      line(pointA.x, pointA.y, pointB.x, pointB.y);
  }
  
}*/

function draw() {
  background(255,255,255); 
  Engine.update(engine);
 // chain.display();
  rect(base.position.x,base.position.y,250,20);
  rect(ball.position.x,ball.position.y,50,50);
}
