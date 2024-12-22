/**
catchSomethingGame- Isaac Olson
ACS Hour 1 cohort b
Completed 05/28/21
This program incorporates multiple aspects of OOP, such as methods, classes, and conditionals.
**/

var cells = [];
//var cells = new Array(0);
var cells;
var test;
var score = 0;
var start = 0;
var end = 0;
var mult = 0;
var startingInc = 4;
var increment = startingInc;
var timeInt = 0;
var startTime;
var length = 480;
var rules =
  "  Use your mouse to move the \nbucket and catch the raindrops.\n     Click anywhere to start!";

var xPos;
var yPos;
var yChange;
var length2;

function setup() {
  //cells = new Array(0);
  // test = new Bucket();
  //textSize(48);
  score = 0;
  fill(255);
  increment = startingInc;
  createCanvas(480, 420);
  background(134, 197, 218);
  text(rules, 138, 100);
  if (cells.length == 0) {
    cells.push(new Raindrop(width / 2, random(0, 80)));
  }
  test = new Bucket();
  test.setPos((length - 158) / 2);
}

function draw() {
  if (start > 0 && end == 0) {
    //System.out.println(mouseX);
    background(134, 197, 218);
    // console.log(test.getPos());
    if (score == increment) {
      addDrop();
    }
    for (var i = 0; i < cells.length; i++) {
      cells[i].fall();
      cells[i].show();
      //println(test.getHeight());
      if (
        cells[i].getyPos() > test.getHeight() - 6 &&
        cells[i].getyPos() < test.getHeight() + 2
      ) {
        var difference = test.getPos() - cells[i].getxPos();
        if (difference >= 0 && difference < 26) {
          cells[i].space();
          score++;
          //println("left "+difference);
        }
        if (difference < 0 && difference > -26) {
          cells[i].space();
          score++;
          //println("right "+difference);
        }
      }
      if (cells[i].getyPos() > height) {
        end = 1;
      }
    }
    fill(250);
    test.move();
    test.show();
    //console.log(test.getPos());
    fill(128);
    rect(length - 158, 0, 158, 540);
    fill(250);
    countTimeAndScore();
    text("click here \nto reset", length - 138, 132);
    //text("test", length-165, test.getHeight()+18);
  } else if (end > 0) {
    clr();
  }
}

function mousePressed() {
  //println(mouseY);
  //score++;
  if (start == 0) {
    start++;
    startTime = millis();
  } else if (mouseX > length - 148 && mouseY > 110 && mouseY < 175) {
    start = 0;
    score = 0;
    for (var i = 0; i < cells.length; i++) {
      cells.pop();
    }
    setup();
    test.setPos((length - 158) / 2);
    //System.out.println("reset increment: "+increment);
  } else if (end > 1) {
    end = 0;
    start = 0;
    for (var e = 0; e < cells.length; e++) {
      cells.pop();
    }
    setup();
    test.setPos((length - 158) / 2);
    //System.out.println("reset increment: "+increment);
  }
}

function addDrop() {
  //println(increment);
  //println("runs");
  //println("score "+score+ " increment "+increment+score%increment);
  mult++;
  if (cells[cells.length - 1].getxPos() < (length - 158) / 2) {
    cells.push(
      new Raindrop(
        cells[cells.length - 1].getxPos() + random(5, 50),
        random(-20, 20)
      )
    );
  } else {
    cells.push(
      new Raindrop(
        cells[cells.length - 1].getxPos() - random(5, 50),
        random(-20, 20)
      )
    );
  }
  increment += startingInc + 2 * mult;
}

function clr() {
  fill(0);
  rect(0, 0, width, height);
  fill(50, 150, 255);
  text(
    "  GAME OVER! You lasted " +
      Math.round(timeInt) +
      "\nseconds and got a score of " +
      score +
      ".",
    144,
    height / 2 - 85
  );
  text("Click anywhere to play again.", 146, height / 2 - 42);
  for (var i = 0; i < cells.length; i++) {
    cells.pop();
  }
  end = 2;
  //noLoop();
  //System.out.println(end);
}

function countTimeAndScore() {
  var timePassed = (millis() - startTime) / 1000;
  timeInt = timePassed;
  text("score: " + score, length - 138, 40);
  text("time: " + Math.round(timeInt), length - 138, 78);
  //text("time: 0", length-138, 78);
}

class Bucket {
  // int xPos;
  // int yPos;
  // int length=480;

  constructor() {
    this.yPos = 340;
    this.length = 480;
    this.xPos = (this.length - 158) / 2;
  }

  show() {
    quad(
      this.xPos - 29,
      this.yPos,
      this.xPos + 28,
      this.yPos,
      this.xPos + 17,
      this.yPos + 46,
      this.xPos - 18,
      this.yPos + 46
    );
  }

  getPos() {
    return this.xPos;
  }

  getHeight() {
    return this.yPos;
  }

  setPos(pos) {
    this.xPos = pos;
  }

  move() {
    //version 1: bucket moves based on how far away mouse is
    var change = mouseX - this.getPos();
    change *= 0.09;
    if (change > 7) {
      change = 7;
    }
    if (change < -7) {
      change = -7;
    }
    if (this.getPos() > length - 172 && mouseX > length - 160) {
      //change=0;
      this.xPos = 0;
    }
    if (this.getPos() < 23 && mouseX < 10) {
      this.xPos = length - 170;
    }
    //System.out.println(change);
    this.xPos += change;
  }
}

class Raindrop {
  // private double xPos;
  // private double yPos;
  // private double yChange=1.56;
  // private int length=480;

  // constructor() {
  //   this.yPos=(Math.random() * 160) + 1;
  //   this.xPos=random(12, length-182);
  //   this.yChange=1.56;
  //   this.length=480;
  // }

  constructor(xInput, yInput) {
    this.yPos = yInput;
    this.xPos = xInput;
    this.yChange = 1.56;
    this.length2 = 480;
  }

  getxPos() {
    return this.xPos;
  }

  getyPos() {
    return this.yPos;
  }

  show() {
    fill(0, 0, 255);
    ellipse(this.xPos, this.yPos, 13, 20);
  }

  fall() {
    this.yPos += this.yChange;
  }

  space() {
    this.yPos = random(-10, 30);
    //xPos=random(12, length-182);
    if (this.getxPos() < (this.length2 - 158) / 2) {
      this.xPos += random(5, 120);
    } else {
      this.xPos -= random(5, 120);
    }
  }
}