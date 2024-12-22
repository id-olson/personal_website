/**
Very Cool Dice- Isaac Olson
ACS Hour 1 cohort C
Created 10/30/20
This program introduces OOP! Did you guess right?
**/

var dieRoll=0;
var rollTotal=0;
var xPos=0;
var yPos=0;

var start=0;
var off=0;
var gr8rThan=false;
var moreThan30=false;

function setup()
{
	createCanvas(520, 520);
	noLoop();
	textSize(22);
}

function draw()
{
    var rollSum=0;
	moreOrLess();
	background(20, 20, 190);
	if(off==0){
		guess();
	}
	var dice = new Array(9);
	var xSpace=133;
	var ySpace=40;
if(start!=0){
	 for(var i=0; i<dice.length; i++){
		if(i<3){
			dice[i] = new Die(90+xSpace*i, ySpace);
		}
		else if(i<6){
			xSpace=133;
			ySpace=140;
			dice[i] = new Die(90+xSpace*(i-3), ySpace);
		}
		else{
			xSpace=133;
			ySpace=240;
			dice[i] = new Die(90+xSpace*(i-6), ySpace);
		}
	dice[i].roll();	
	rollSum+=dice[i].getRollSum();
	dice[i].show();	
	if(rollSum>30){
		moreThan30=true;
	}
	else if(rollSum<30){
		moreThan30=false;
	}
	}
	if(rollSum!=30){
	if(gr8rThan==true&&moreThan30==true||gr8rThan==false&&moreThan30==false){
	text("You were right! The total is" + " "+ rollSum+"!", width/2-150, 400);
	text("Click to go again!", width/2-80, 425);
	//text(moreThan30,width/2,500);
	}
	else if(rollSum!=30){
	text("Oh! Not quite. The total is" + " "+ rollSum+".", width/2-142, 400);
	text("Click to go again!", width/2-80, 425);
	//text(moreThan30,width/2,500);
	}
	}
	if(rollSum==30){
  text("Try again.... The total is" + " "+ rollSum+".", width/2-134, 400);
	text("Click to go again!", width/2-80, 425);
	//text(moreThan30,width/2,500);		
	}
	}
}

function mousePressed(){
	off=1;
	if(start==0){
	start+=1;
	draw();
  }
	else{
		background(20,20,190);
		guess();
		start=0;
	}
	moreOrLess();
}

function guess(){
	if(start!=0||off==0){
        fill(250,250,250);
		text("I'm about to roll 9 dice. Do you think their" ,50,height/2-97);
		text("total will be greater than or less than 30?" ,50,height/2-72);
		text("Click below to make your guess.",91,height/2-47);
		textSize(25);
		text("Greater than 30!", 50, height/2+8);
		text("Less than 30!", 280, height/2+8);
		textSize(22);
	}
}

function moreOrLess(){
	gr8rThan=true;
	if(mouseX>=280){
		gr8rThan=false;
	}
	//text(gr8rThan,200,490);
}


class Die //models one single dice cube
{
	
	constructor(x, y) 
	{
	    xPos=x;
	    yPos=y;         
	}
	mousePressed(){
		loop();
		draw();
	}
	roll(){
		dieRoll=Math.floor(Math.random() * 6) + 1;
        rollTotal=0;
        //dieRoll=1;
		rollTotal+=dieRoll;
	}
	getRollSum(){
		return rollTotal;
	}
	show(){
		rect(xPos,yPos,75,75);
		fill(0);
		if(dieRoll==1){
			ellipse(xPos+38,yPos+38,18,18);
		}
		if(dieRoll==2){
			ellipse(xPos+25,yPos+25,18,18);
			ellipse(xPos+50,yPos+50,18,18);	
		}
		if(dieRoll==3){
		    ellipse(xPos+38,yPos+38,18,18);
			ellipse(xPos+57,yPos+57,18,18);
			ellipse(xPos+19,yPos+19,18,18);
		}
		if(dieRoll==4){
			ellipse(xPos+18,yPos+20,18,18);
			ellipse(xPos+18,yPos+54,18,18);
			ellipse(xPos+58,yPos+20,18,18);
			ellipse(xPos+58,yPos+54,18,18);
		}
		if(dieRoll==5){
			ellipse(xPos+38,yPos+38,18,18);
			ellipse(xPos+18,yPos+20,18,18);
			ellipse(xPos+18,yPos+54,18,18);
			ellipse(xPos+58,yPos+20,18,18);
			ellipse(xPos+58,yPos+54,18,18);
		}
		if(dieRoll==6){
			ellipse(xPos+22,yPos+16,18,18);
			ellipse(xPos+22,yPos+37,18,18);
			ellipse(xPos+22,yPos+58,18,18);
			ellipse(xPos+54,yPos+16,18,18);
			ellipse(xPos+54,yPos+37,18,18);
			ellipse(xPos+54,yPos+58,18,18);
		}
		fill(255);
	}
}