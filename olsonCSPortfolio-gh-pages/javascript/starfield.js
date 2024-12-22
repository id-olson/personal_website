/**
Circles in Motion- Isaac Olson
ACS Hour 1 cohort C
Created 12/19/20
This program utilizes inheritance and interfaces. 
Check out the opacity of the oddball particles!
**/

/*setup and display*/
var parts;

var angle;
var speed;
var x;
var y;
var randomY;
var space;
var color1, color2, color3;
var size;
var grow;

var xPos;
var yPos;
var xChange;
var yChange;
var gray;
var opacity;
var opacityChange;
var bright;

function setup() {
  createCanvas(1000, 750);
  parts = new Array(12);
  for (var e=0; e<parts.length/3; e++) {
    parts[e] = new NormalParticle(PI/4*e, (e+13)*1.5);
  }
  for (var n=parts.length/3; n<parts.length*2/3; n++) {
    parts[n] = new JumboParticle(PI/4*n, (n+12)*1.8);
  }
  for (var i=parts.length*2/3; i<parts.length; i++) {
    parts[i] = new OddballParticle();
  }
}

function draw() {
  background(20, 30, 180);
  fill(255, 240, 0);
  for (var i=0; i<parts.length; i++) {
    parts[i].move();
    parts[i].show();
  }
}

function mousePressed(){
  for (var i=0; i<parts.length/3; i++) {
    parts[i] = new NormalParticle(PI/4*i, (float)(i+13)*1.5);
  }
  for (var e=parts.length/3; e<parts.length*2/3; e++) {
    parts[e] = new JumboParticle(PI/4*e, (float)(e+12)*1.8);
  }
}

/*defining a particle*/
class NormalParticle {

  constructor(angleInput, sizeInput) {
    this.angle=angleInput;
    this.randomY = (Math.random()*620+75);
    this.color1 = random(0, 255);
    this.color2 = random(0, 255);
    this.color3 = random(0, 255);
    this.space=30;
    this.size=sizeInput;
    this.grow=true;
    this.speed=0.012;
  }

  move() {
    this.x=width/2 + cos(this.angle)*this.space;
    this.y=height/2 + sin(this.angle)*this.space;
    this.angle+=this.speed;
    if (this.space<=40) {
      this.grow=true;
    }
    if (this.space>=300) {
      this.grow=false;
    }
    if (this.grow==true) {
      this.speed*=1.001;
      this.space*=1.004;
      this.size*=1.002;
    }
    if (this.grow==false) {
      this.speed/=1.001;
      this.space/=1.004;
      this.size/=1.002;
    }
  }

  show() {
    fill(this.color1, this.color2, this.color3);
    stroke(0);
    ellipse(this.x, this.y, this.size, this.size);
  }
}

/*Jumbo particles are bigger*/
class JumboParticle extends NormalParticle {

  constructor(angleInput, sizeInput) {
    super(angleInput, sizeInput);
  }

  show() {
    fill(this.color1, this.color2, this.color3);
    stroke(0);
    ellipse(this.x, this.y, this.size*1.05, this.size*1.05);
  }
}

/*Oddball particles have different motion*/
  class OddballParticle {

  constructor() {
    this.xPos=random(75,950); 
    this.yPos=random(25,725);
    this.xChange=random(1,3);
    this.yChange=random(1,3);
    this.opacity=99;
    this.gray = 192;
    this.bright=false;
  }

  move() {
    this.xPos+=this.xChange;
    this.yPos+=this.yChange;
    if (this.xPos>985) {
      this.xChange=(Math.random()*2+1);
      this.xChange*=-1;
    }
    if (this.xPos<18) {
      this.xChange=(Math.random()*2+1);
    }
    if (this.yPos>height-12) {
      this.yChange*=-1;
    }
    if (this.yPos<19) {
      this.yChange*=-1;
    }
  }

  show() {
    if (this.xChange>0) {
      this.opacityChange=this.xChange/7;
    } else {
      this.opacityChange=this.xChange/7*-1;
    }
    noStroke();
    fill(this.gray, this.opacity);
    ellipse(this.xPos, this.yPos, 38, 38);
    if (this.bright==false) {
      this.opacity-=this.opacityChange;
    }
    if (this.opacity<=-4) {
      this.bright=true;
    }
    if (this.bright==true) {
      this.opacity+=this.opacityChange;
    }
    if (this.opacity>=102) {
      this.bright=false;
    }
  }
}