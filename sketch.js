var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var body1, body2, body3
var body1Sprite, body2Sprite, body3Sprite
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	body1Sprite = createSprite(500,610,20,100);
	body2Sprite = createSprite(300,610,20,100);
	body3Sprite = createSprite(400,650,200,20);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	



	engine = Engine.create();
	world = engine.world;
	body1 = Bodies.rectangle(500, 610, 20, 100 , {isStatic:true} );
	body2 = Bodies.rectangle(300, 610, 20, 100 , {isStatic:true} );
	body3 = Bodies.rectangle(400, 650, 200, 20 , {isStatic:true} );
	World.add(world, body1);
	World.add(world, body2);
	World.add(world, body3);	

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.7, isStatic:true});
	World.add(world, packageBody);

	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  //groundSprite.x = ground.position.x
  //groundSprite.y = ground.position.y
  //body1Sprite.x= body1.position.x 
  //body1Sprite.y= body1.position.y 
  body1Sprite.x= body1.position.x 
  body1Sprite.y= body1.position.y 
  body2Sprite.x= body2.position.x 
  body2Sprite.y= body2.position.y 
  body3Sprite.x= body3.position.x 
  body3Sprite.y= body3.position.y 
  
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}



