var input
var button
var login
var wrongans1 = true
var rightans1 = true

function setup(){
    createCanvas(1580,710); 
  //  background("lilac");

    push();
    textSize(80);
    fill("black");
    textStyle(ITALIC);
    text("Welcome to the general knowledge quiz", 80, 90);
    pop();
    textSize(25);
    fill("black");
    text("Please enter your name:", 380, 310);
   
    login = createInput("");
    login.style('color',"blue");
    login.position(700,300,30,30);
    
    button = createButton("Start the game");
    button.style('color',"green");
    button.style('background-color',"white");
    button.style('font-size',"24px");
    button.position(700,400,90,90);
    button.mousePressed(()=>{
      name1=login.value()
      if(name1 == ""){
        alert("Please enter a name");
      }
      else{
        button.mousePressed(Question1);
      }
    })

}
function Question1(){
    background("lilac");
    login.hide();
    button.hide();
    q1 = createElement("h1");
    q1.html("Q1. Who is the prime minister in the UK?");
    q1.style('color', "green");
    q1.position(40,40);

    q1a = createButton("Theresa May");
    q1a.style('color',"blue");
    q1a.style('background-color',"white");
    q1a.style('font-size',"24px");
    q1a.position(80,120);

    q1a.mousePressed(q1Option1);

    q1b = createButton("Boris Johnson");
    q1b.style('color',"blue");
    q1b.style('background-color',"white");
    q1b.style('font-size',"24px");
    q1b.position(80,170);

    q1b.mousePressed(q1Option2);

    q1c = createButton("Rishi Sunak");
    q1c.style('color',"blue");
    q1c.style('background-color',"white");
    q1c.style('font-size',"24px");
    q1c.position(80,220);

    q1c.mousePressed(q1Option3);

    q1d = createButton("Clement Atlee");
    q1d.style('color',"blue");
    q1d.style('background-color',"white");
    q1d.style('font-size',"24px");
    q1d.position(80,270);

    q1d.mousePressed(q1Option4);

    next = createButton("Continue to next question!");
    next.style('color',"blue");
    next.style('background-color',"white");
    next.style('font-size',"24px");
    next.position(80,400);

    next.mousePressed(Question2);

}

function q1Option1(){
  q1a.style("background-color", "red");
  q1c.style("background-color", "green");

  wrongans1a = createElement("h1");
  wrongans1a.html("Your answer was incorrect. The correct option was c.");
  wrongans1a.style('color', "green");
  wrongans1a.position(40,330);
}

function q1Option2(){
  q1b.style("background-color", "red");
  q1c.style("background-color", "green");

  wrongans1 = createElement("h1");
  wrongans1.html("Your answer was incorrect. The correct option was c.");
  wrongans1.style('color', "green");
  wrongans1.position(40,330);
}

function q1Option3(){
  q1c.style("background-color", "green");

  rightans1 = createElement("h1");
  rightans1.html("Your answer was correct. Well Done!!");
  rightans1.style('color', "green");
  rightans1.position(40,330);
}

function q1Option4(){
  q1d.style("background-color", "red");
  q1c.style("background-color", "green");

  wrongans1 = createElement("h1");
  wrongans1.html("Your answer was incorrect. The correct option was c.");
  wrongans1.style('color', "green");
  wrongans1.position(40,330);
}

function Question2(){
  background("white");
  q1.hide();
  q1a.hide();
  q1b.hide();
  q1c.hide();
  q1d.hide();
  next.hide();
  
  if(wrongans1.show){
    wrongans1.hide();
  }
  if(rightans1.show){
    rightans1.hide();
  }
  
  q2 = createElement("h1");
  q2.html("Q2. What?");
  q2.style('color', "green");
  q2.position(40,40);

  q2a = createButton("Theresa May");
  q2a.style('color',"blue");
  q2a.style('background-color',"white");
  q2a.style('font-size',"24px");
  q2a.position(80,120);

  q2a.mousePressed(q2Option1);

  q2b = createButton("Boris Johnson");
  q2b.style('color',"blue");
  q2b.style('background-color',"white");
  q2b.style('font-size',"24px");
  q2b.position(80,170);

  q2b.mousePressed(q2Option2);

  q2c = createButton("Rishi Sunak");
  q2c.style('color',"blue");
  q2c.style('background-color',"white");
  q2c.style('font-size',"24px");
  q2c.position(80,220);

  q2c.mousePressed(q2Option3);

  q2d = createButton("Clement Atlee");
  q2d.style('color',"blue");
  q2d.style('background-color',"white");
  q2d.style('font-size',"24px");
  q2d.position(80,270);

  q2d.mousePressed(q2Option4);

  next2 = createButton("Continue to next question!");
  next2.style('color',"blue");
  next2.style('background-color',"white");
  next2.style('font-size',"24px");
  next2.position(80,400);

  next2.mousePressed(Question3);
}

function q2Option1(){
  q1a.style("background-color", "red");
  q1c.style("background-color", "green");

  wronganswer2 = createElement("h1");
  wronganswer2.html("Your answer was correct. Well Done!!.");
  wronganswer2.style('color', "green");
  wronganswer2.position(40,330);
}

function q2Option2(){
  q1b.style("background-color", "red");
  q1c.style("background-color", "green");

  wronganswer2 = createElement("h1");
  wronganswer2.html("Your answer was incorrect. The correct option was a.");
  wronganswer2.style('color', "green");
  wronganswer2.position(40,330);
}

function q2Option3(){
  q1c.style("background-color", "green");

  wronganswer2 = createElement("h1");
  wronganswer2.html("Your answer was incorrect. The correct option was a.");
  wronganswer2.style('color', "green");
  wronganswer2.position(40,330);
}

function q2Option4(){
  q1d.style("background-color", "red");
  q1c.style("background-color", "green");

  wronganswer2 = createElement("h1");
  wronganswer2.html("Your answer was incorrect. The correct option was a.");
  wronganswer2.style('color', "green");
  wronganswer2.position(40,330);
}