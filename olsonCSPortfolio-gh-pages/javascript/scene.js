/**
Digital scene assignment- Isaac Olson
ACS Hour 1 cohort C
Created 9/24/20
This program uses multiple drawing and formatting properties to create the structure of a house.
**/
function setup() {
	//establishing dimensions of scene
	var canvas=createCanvas(700, 750);
}
function draw() {
	/*establishing colors so I can refer to them   
by name rather than rgb value*/
	var blue=color(135, 206, 235);
	var yellow=color(250, 200, 0);
	var brown=color(210, 105, 30);
	var green=color(0, 150, 0);
	var red=color(150, 0, 0);
	var black=color(0,0,0);
	var white=color(255, 255, 255);
	//drawing in background and shapes
	background(blue);
	noStroke();
	fill(yellow);
	ellipse(75, 95, 100, 100);
	stroke(1);
	fill(brown);
	rect(200, 400, 300, 310);
	fill(green);
	rect(0, 710, 700, 40)
	fill(black);
	strokeWeight(3);
	line(0, 710, 700, 710);
	strokeWeight(1);
	fill(red);
	triangle(145, 415, 350, 305, 555, 415);
	fill(white);
	quad(330, 480, 350, 440, 370, 480, 350, 520);	
	noFill();
	strokeWeight(2);
	beginShape();
	vertex(325, 710);
	vertex(325, 625);
	vertex(375, 625);
	vertex(375, 710);
	endShape();
	fill(white);
	curve(327.5, 742.5, 325, 624, 375, 624, 372.5, 742.5);
	strokeWeight(1);
	fill(blue);
	arc(350, 710, 80, 60, 0, PI);	
	fill(white);
	strokeWeight(2);
	rect(225, 505, 50, 65);
	rect(425, 505, 50, 65);
	line(450, 505, 450, 567);
	line(425, 537.5, 474, 537.5);
	line(250, 505, 250, 567);
	line(225, 537.5, 274, 537.5);
	strokeWeight(1);
	fill(yellow);
	ellipse(364, 671, 12, 12);
	//adding text
	fill(black);
	textSize(13);
	text("Welcome!", 321, 727);
	textSize(28);
	text("ACSCompSciPandemic2020", 177, 212);
	textSize(24);
	text("-Isaac O", 365, 240);
}