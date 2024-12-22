/**
Snowier Snow- Isaac Olson
ACS Hour 1 cohort C group number 3
Created 12/7/20
This program deals with the parameters of objects of multiple types.
**/

var s;
var x;
var y;
var paint1;
var paint2;
var paint3;
var speed;
var jeep;
var toyota;
var start=0;

var x;
var y; 
var goLeft;
var radius;
var xChange;
var yChange;

function setup() {
  createCanvas(900, 400);
  s=new Array(64);
  for (var i=0; i<s.length*0.75; i++) {
    s[i]=new SnowFlake(true);
  }
  for (var i=s.length*0.75; i<s.length; i++) {
    s[i]=new SnowFlake(false);
  }
  toyota=new Car(100, 295, random(1.4, 2.6));
  jeep=new Car(100, 372, random(1.15, 2.4));
  textSize(18);
}

function draw() {
  background(20, 30, 180);
  fill(65, 65, 65);
  rect(449, 345, 902, 155);
  fill(255, 240, 0);
  drawLines();
  for (var i=0; i<s.length/2; i++) {
    s[i].fall();
    s[i].fallAgain();
    s[i].display();
  }
  if(start==0){
    text("Click to flip the snowflakes!", width/2-118, 125);
  }
  if(start==1){
    text("You can always click to flip them again!", width/2-156, 125);
  }
  jeep.displayCarRight();
  jeep.moveCarRight();
  toyota.displayCarLeft();
  toyota.moveCarLeft();
  for (var i=s.length/2; i<s.length; i++) {
    s[i].fall();
    s[i].fallAgain();
    s[i].display();
  }
}

function drawLines() {
  var startX=50;
  while (startX<870) {
    rect(startX, 324, 32, 9);
    startX+=100;
  }
}

function mousePressed() {
	if(start<3){
  start+=1;
	}
  for (var i=0; i<s.length; i++) {
    if (s[i].moveLeft()==true) {
      s[i].setBoolean(false);
    } else {
      s[i].setBoolean(true);
    }
  }
}

class Car {

  constructor(tempX, tempY, tempSpeed) {
    this.x = tempX;
    this.y = tempY;
    this.speed = tempSpeed;
    this.setColor();
  }

  displayCarRight() {
    rectMode(CENTER);
    fill(this.paint1, this.paint2, this.paint3);
    rect(this.x - 10, this.y - 30, 50, 20);
    rect(this.x, this.y - 10, 75, 20);
    fill(212, 242, 252);
    rect(this.x + 5, this.y - 30, 15, 15);
    fill(0);
    ellipse(this.x - 25, this.y, 20, 20);
    ellipse(this.x + 25, this.y, 20, 20);
  }

  displayCarLeft() {
    rectMode(CENTER);
    fill(this.paint1, this.paint2, this.paint3);
    rect(this.x + 10, this.y - 30, 50, 20);
    rect(this.x, this.y - 10, 75, 20);
    fill(212, 242, 252);
    rect(this.x - 5, this.y - 30, 15, 15);
    fill(0);
    ellipse(this.x - 25, this.y, 20, 20);
    ellipse(this.x + 25, this.y, 20, 20);
  }

  moveCarRight() {
    this.x += this.speed;
    if (this.x>945) {
      this.x=0;
      this.setColor();
    }
  }

  moveCarLeft() {
    this.x -= this.speed;
    if (this.x+28<0) {
      this.x=945;
      this.setColor();
    }
  }

  setColor() {
    this.paint1 = random(0, 255);
    this.paint2 = random(0, 255);
    this.paint3 = random(0, 255);
  }
}

class SnowFlake{
  
  constructor(input) {
    this.x=(float)(Math.random()*width);
    this.y=(float)(Math.random()*height);
    this.goLeft=input;
    this.radius = random(8.5, 10.5);
    this.setSpeed();
  }

  getX() {
    return xChange;
  }

  getY() {
    return yChange;
  }

  display() {
    fill(255);
    ellipse(this.x, this.y, this.radius, this.radius);
  }

  setSpeed() {
    this.xChange=(float)((Math.random()*1.85+0.15));
    this.yChange=(float)((Math.random()*2+0.35));
  }

  fall() {
    this.y+=this.yChange;
    if (this.goLeft==true) {
      this.x-=this.xChange;
      if (this.x<=0) {
        this.x=915;
        this.setSpeed();
      }
    } else if (this.goLeft==false) {
      this.x+=this.xChange;
      if (this.x>=915) {
        this.x=0;
        this.setSpeed();
      }
    }
  }

  setBoolean(inputBoolean) {
    this.goLeft=inputBoolean;
  }

  moveLeft() {
    if (this.goLeft==true) {
      return true;
    }
    return false;
  }

  fallAgain() {
    if (this.y>height) {
      this.y=0;
    }
  }

  mousePressed() {
    this.xChange=(float)((Math.random()*2.45));
  }
}