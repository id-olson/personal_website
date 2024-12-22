/**
String thing assignment- Isaac Olson
ACS Hour 1 cohort C
Created 10/02/20
This program uses multiple String properties to change color and font.
**/

function setup() {
  var canvas=createCanvas(480, 360);
  background(150, 150, 150);
  }

  var colorTrack=0;
  var colorTrack2=0;

function draw() {
  //console.log(mouseX);
  textSize(24);
	/*drawing "easy" with different colors 
	for each character*/
  textFont('Sans-serif');
	var easy="easy";
	var ezX=275;
	var i=0;
	while(i<easy.length){
		var colorSet=easy.substring(i,i+1);
		fill(100+i*50, 100+i*10, 100+i*10);
		text(colorSet, ezX, height/2-30);		
		ezX+=textWidth(colorSet);
		i++;
  }
	//drawing the first and second lines
	fill(0,0,0);
    textFont('Georgia');
	var line1="Haikus are ";	
	text(line1, width/2-87.5, height/2-30);
	var line2="This one is 5, 7, 5";
	text(line2, 150, height/2);
	
	/*drawing the third line with a color 
	gradient for "see"*/
	textFont('monospace');
	fill(0,0,0);
	var line3="     It all adds up.";
	text(line3, width/2-130, height/2+30);
	
	if(colorTrack>=255){
		colorTrack=0;
	}
	else{
		colorTrack++;
			fill(colorTrack, 255-colorTrack, colorTrack);
  }
	text("S e", width/2-130, height/2+30);
	
	fill(0,0,0);
	if(colorTrack2>=255){
		colorTrack2=0;
	}
	else{
		colorTrack2=colorTrack2+0.5;
			fill(colorTrack2, 205, 175);
  }
	text(" e ?", width/2-130, height/2+30);
}
