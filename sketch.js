const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ball,ballImg;
var hoop,hoopImg;
var base,baseImg;
var trow,trowImg;

function preload() {
ballImg = loadImage("Imgs/Ball.png");
hoopImg = loadImage("Imgs/Hoop.png");
baseImg = loadImage("Imgs/Base.png");
trowImg = loadImage("Imgs/Throw.png");
}

function setup() {
    createCanvas(500,300)
    engine = Engine.create();
    world = engine.world;

    

}
function draw() {
    background(102,51,51);
    
}