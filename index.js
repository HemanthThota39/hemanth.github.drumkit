var numberOfButtons = document.querySelectorAll(".drum").length;


for (var i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    makeSound(this.innerHTML);
    AnimateButton(this.innerHTML);
  });
}

document.addEventListener("keypress", function(event) {
  makeSound(event.key);
  AnimateButton(event.key);
});
var keys = ["w", "a", "s", "d", "j", "k", "l"];
document.getElementsByClassName("tune")[0].addEventListener("click", function() {
  let numberOfTimes = 0;
  while(numberOfTimes < keys.length)
  {
    task(numberOfTimes);
    numberOfTimes++;
  }

  // makeSound("l");
});

function soundDelay(i)
{
  var randomDrum = getRandom(keys.length);
  document.getElementsByClassName("drum")[randomDrum].click();
  setTimeout(document.getElementsByClassName("drum")[randomDrum].click(), 5000*i);
}

function task(i)
{
  var randomDrum = getRandom(keys.length);
  setTimeout(function(){document.getElementsByClassName("drum")[randomDrum].click();}, 500*i);
}

function makeSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
    case "a":
      var audioA = new Audio('sounds/tom-2.mp3');
      audioA.play();
      break;
    case "s":
      var audioS = new Audio('sounds/tom-3.mp3');
      audioS.play();
      break;
    case "d":
      var audioD = new Audio('sounds/tom-4.mp3');
      audioD.play();
      break;
    case "j":
      var audioJ = new Audio('sounds/snare.mp3');
      audioJ.play();
      break;
    case "k":
      var audioK = new Audio('sounds/kick-bass.mp3');
      audioK.play();
      break;
    case "l":
      var audioL = new Audio('sounds/crash.mp3');
      audioL.play();
      break;

    default:
      console.log(buttonText);
  }
}



function AnimateButton(keyChar) {
  var activeButton = document.querySelector("." + keyChar);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed")
  }, 10);
}

function getRandom(number) {
  var randElement = Math.random() * number;
  randElement = Math.floor(randElement);
  return randElement;
}
