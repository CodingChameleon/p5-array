var numbers = [15,22,48,37];
var words = ["choice", "voice", "hustle", "grit", "growth", "optimism", "consideration"];

var j = 0

function setup(){
    createCanvas(600,400);
}

function draw(){
    background(0);
    
    for(var i = 0; i < 4; i++){
        ellipse((i+1)*100,200,numbers[i]);
    }
    
    fill(255);
    textSize(50);
    text(words[j], 230, 150);
}

function mousePressed(){
    j ++;
    if (j==7){
        j=0
    }
}
