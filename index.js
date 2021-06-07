for (var i = 0; i < 7; i++) {
  var path = [
    "sounds/tom-1.mp3",
    "sounds/tom-2.mp3",
    "sounds/tom-3.mp3",
    "sounds/tom-4.mp3",
    "sounds/snare.mp3",
    "sounds/crash.mp3",
    "sounds/kick-bass.mp3",
  ];
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keypress", function () {
  makeSound(event.key.toLowerCase());
  buttonAnimation(event.key.toLowerCase());
});

function makeSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio(path[0]);
      audio.play();

      break;

    case "a":
      var audio = new Audio(path[1]);
      audio.play();

      break;

    case "s":
      var audio = new Audio(path[2]);
      audio.play();

      break;

    case "d":
      var audio = new Audio(path[3]);
      audio.play();

      break;

    case "j":
      var audio = new Audio(path[4]);
      audio.play();

      break;

    case "k":
      var audio = new Audio(path[5]);
      audio.play();

      break;

    case "l":
      var audio = new Audio(path[6]);
      audio.play();

      break;

    default:
      alert("You have pressed the wrong key");
      break;
  }
}




function buttonAnimation(currentkey){
 var activeButton= document.querySelector("."+ currentkey);

 activeButton.classList.add("pressed");

 setTimeout(function(){
     activeButton.classList.remove("pressed");
 },100);
}


