const wrapper = document.getElementById('wrapper');
const myAssignment = document.getElementById('myAssignment');
const myAwnser = document.getElementById('myAwnser');
const feedback = document.getElementById('feedback');

let mySum;
let sound = new Audio();

function makeSum(){
  var a = Math.floor(Math.random() * 10 + 1);
  var b = Math.floor(Math.random() * 10 + 1);
  mySum = a + " * " + b;
  myAssignment.innerHTML = mySum;
  myAwnser.focus();
}

function keyPressed(evt){
  if(evt.keyCode == 13){
    if(eval(mySum) == myAwnser.value){
      feedback.src = "img/goed.png";
      sound.src = "img/good.mp3";
      sound.play();
    }
    else{
      feedback.src = "img/fout.png";
      sound.src = "img/wrong.mp3";
      sound.play();
    }
    window.setTimeout(waiting, 2000);
  }
}

function waiting(){
  feedback.src = "img/feedback.png";
  myAwnser.value = "";
  makeSum();
}

makeSum();
myAwnser.addEventListener("keydown", keyPressed, false);
