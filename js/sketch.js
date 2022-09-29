const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box5,box6,box7,box8
var backgroundImg,platform;
var box, slingShot;

var polygon;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
    polygon= loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    polygon= Bodies.circle(50,200,20);
    World.add(world,polygon);
    
    slingShot=new SlingShot(this.polygon,{x:100,y:200})

    ImageMode(CENTER)
    Image(polygon_img,polygon.position.x,polygon.position.y,40,40)
    
    //level 1//
    box1 = new Box(330,235,30,40);
    box2 = new Box(360,235,30,40);
    box3 = new Box(390,235,30,40);
    box4 = new Box(420,235,30,40);
    box5 = new Box(450,235,30,40);

    //level 2//
    box6 = new Box(360,195,30,40);
    box7 = new Box(390,195,30,40);
    box8 = new Box(420,195,30,40);

    //level 3//
    box3 = new Box(390,155,30,40);
    
    
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    
    platform.display();
    
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(this.ball);
    }
}
