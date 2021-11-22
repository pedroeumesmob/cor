var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here

}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(100,580,150,30);
    block1.shapeColor = "blue";
    block3 = createSprite(500,580,150,30);
    block3.shapeColor = "red";
    block4 = createSprite(700,580,150,30);
    block4.shapeColor = "yellow";
    block2 = createSprite(300,580,150,30);
    block2.shapeColor = "orange";

    //create two more blocks i.e. block3 and block4 here


    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    //write code to add velocityX and velocityY
    ball.velocityX = 10;
    ball.velocityY = 10;
}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
    }
    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "red";
    }
    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "yellow";
    }



    if(block2.isTouching(ball)){
        ball.shapeColor = "orange";
        //write code to set velocityX and velocityY of ball as 0

        //write code to stop music
    }

    //write code to bounce off ball from the block3


    //write code to bounce off ball from the block4

    drawSprites();
}
