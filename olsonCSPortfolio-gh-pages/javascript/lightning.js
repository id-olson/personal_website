/**
Lucky Lightning- Isaac Olson
ACS Hour 1 cohort C
Created 10/23/20
This program makes heavy use of randomization. Can you hit the text?
**/

var startX=0;
var startY=150;
var endX=0;
var endY=150;
var start=1;
var xPos=0;
var yPos=0;
var hitCount=false;
var clickCount=0;

function setup() {   
  textFont('monospace');  
	createCanvas(400, 400);
	strokeWeight(8);
	background(0);
	text("Can you hit this text? Click to find out!", 20,60);  
}   
function draw() {  
	xPos=(random(15,205));
	yPos=(random(10,395));
	stroke((random(205,255)), (random(175,225)), 0);
	
	while(endX<400&&start>1){
		endX=startX+(random(0,9));
		endY=startY+(random(-9,9));
		line(startX,startY,endX,endY);
		if(startX>=xPos-5&&startX<=xPos+130){
			if(startY>=yPos-15&&startY<=yPos+6){
			hitCount=true;
			//text(hitCount, 100, 100);
		}
		}
		text("Can you hit this text?", xPos,yPos);
		startX=endX;
		startY=endY;
	}
if(hitCount==true&&start!=1){
		text("Nice one! You got it in "+clickCount+" tries!",70,80);
	}
}  

function mousePressed() {
	clickCount++;
	hitCount=false;
    background(0);
	start++;
	startX=0;
	startY=150;
	endX=0;
	endY=150;
}

	
