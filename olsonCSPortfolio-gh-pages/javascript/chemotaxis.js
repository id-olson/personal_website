/**
Dodgy Dots Defense- Isaac Olson
ACS Hour 1 cohort C
Created 11/17/20
This program continues the focus on OOP. 
Can you reach 51 points?
**/

var cells = new Array(4);
var score=0;
var start=0;
var rules="Quick! Mouse over the dots to save the "+"\n"+"rectangle base! Click anywhere to start!"+"\n"+"     (And watch out- they get faster :) )";

var xDiff=0;
var yDiff=0;
var xDiffM=0;
var yDiffM=0;
var xChange=1;
var yChange=1;
var midX=310;
var midY=520/2;

function setup() {
  createCanvas(620, 520);
  background(20, 20, 190);
  textSize(25);
  fill(255);
  text(rules, 75, 100);
  for (var i=0; i<cells.length; i++) {
    cells[i]=new Cell();
  }
}

function draw() {
  // for (var i=0; i<cells.length; i++) {
  //   cells[i]=new Cell();
  // }
  if (start>0) {
   background(20, 20, 190);
    for (var i=0; i<cells.length; i++) {
      // textSize(12);
      fill(255);
      //text(cells[i].getColor(), 100, 100+i*50);
      // text(cells[i].getxPos()+" cell "+[i+1]+" x pos", 300*i+35, 100);
      // text(cells[i].getyPos()+" cell "+[i+1]+" y pos", 300*i+35, 200);
      //cells[i]=new Cell();
      cells[i].show();  
      cells[i].attract();
			if (cells[i].getxDiffM()<11&&cells[i].getyDiffM()<10) {
			cells[i].space();
			score++;
			}
			if (cells[i].getxPos()>255&&cells[i].getxPos()<360) {
			if (cells[i].getyPos()>216&&cells[i].getyPos()<306) {
			background(20, 20, 190);
			background(25);
			fill(50, 150, 255);
			text("GAME OVER! You reached a score of "+score+".", 75, 520/2-85);
			noLoop();
			}
			} 
    }
  }
}

function mousePressed() {
  start++;
}

class Cell {

  constructor() {
    this.xPos=random(10,110);
    this.yPos=random(200,500);
    //this.colors=(random(0,255),random(0,255),random(0,255));
    this.colors1=Math.floor(random(0,255));
    this.colors2=Math.floor(random(0,255));
    this.colors3=Math.floor(random(0,255));
  }

  getxPos() {
    return this.xPos;
  }

  getyPos() {
    return this.yPos;
  }

  getxDiffM() {
    return xDiffM;
  }

  getyDiffM() {
    return yDiffM;
  }
  
  getColor(){
    //return this.colors;
    var colorList = this.colors1+" "+this.colors2+" "+this.colors3;
    //return this.colors1;
    //return this.colors2;
    // return this.colors3;
    return colorList;
  }

  show() {
    fill(45);
    rect(262, 220, 95, 80);
    //fill(this.colors);
    fill(this.colors1,this.colors2,this.colors3);
    //fill(208, 13, 177);
    ellipse(this.xPos, this.yPos, 30, 30);
  }

  attract() {
    if (this.xPos>midX) {
      xDiff=this.xPos-midX;
      if (xDiff>0) {
        xDiff--;
        this.xPos-=xChange;
      }
    } else {
      xDiffM=mouseX-this.xPos;
      xDiff=midX-this.xPos;
      if (xDiff>0) {
        xDiff--;
        this.xPos+=xChange;
      }
    }

    if (this.xPos>mouseX) {
      xDiffM=this.xPos-mouseX;
    }
    if (this.xPos<mouseX) {
      xDiffM=mouseX-this.xPos;
    }
    if (this.yPos>mouseY) {
      yDiffM=this.yPos-mouseY;
    }
    if (this.yPos<mouseY) {
      yDiffM=mouseY-this.yPos;
    }

    if (this.yPos>midY) {
      yDiffM=this.yPos-mouseY;
      yDiff=this.yPos-midY;
      if (yDiff>0) {
        yDiff--;
        this.yPos-=yChange;
      }
    } else {
      yDiffM=mouseY-this.yPos;
      yDiff=midY-this.yPos;
      if (yDiff>0) {
        yDiff--;
        this.yPos+=yChange;
      }
    }
  }

  space() {
    if (this.yPos>520/2) {
      this.yPos=random(20,135);
      this.xPos=random(20,595);
      xChange+=0.02;
      yChange+=0.02;
    }
    else if (this.yPos<=520/2) {
      this.yPos=random(400,515);
      this.xPos=random(20,595);
      xChange+=0.02;
      yChange+=0.02;
    }
  }
  
}