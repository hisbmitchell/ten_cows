


var backgroundColor;
var isOverImage;
var theTeam = [];
var numImages = 38;
var currentImage = 0;

function preload(){
  for (var i = 0; i < numImages; i++) {
    var imageName = "pro" + (i) + ".jpg";
    theTeam[i] = loadImage("assets/" + imageName);
    println(theTeam);
  }
}


function setup() {
  createCanvas(700,500);
  //append ( theTeam, img = loadImage("assets/pro1.jpg");
  
  //get image dimensions
  
  img = theTeam[currentImage];
  
}

function draw() {
  background(255);
  
  push();
  
  translate(width/2,height/2)
  imageMode(CENTER);
  image(theTeam[currentImage], 0, 0);
  
  textAlign(CENTER);
  textSize(18);
  text("MEET THE TEAM!!!", 0, -200);
  //image(img, 0, height/2, img.width/2, img.height/2);
  pop();
  println(mouseX);
  
  if (mouseX >= width/2 - img.width/2 && mouseX <= width/2 + img.width/2 && mouseY >= height/2 - img.height/2 && mouseY <= height/2 + img.height/2){
    isOverImage = true;
  } else {
    isOverImage = false;
  }
  
  
  
}

function mousePressed() {
  
  // var d = dist(mouseX, mouseY, 0, 0);
  // println("d" + d);
  if (isOverImage == true) {
    println("CLICK");
    currentImage = int(random(38));
    //currentImage++;
    //img = theTeam[1];
  }
  
  pop();
  //if mouse within image parameters, and pressed
}