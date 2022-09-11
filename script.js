// let numberOfDrumButtons = document.querySelectorAll(".piano").length;

// for (let i = 0; i < numberOfDrumButtons; i++) {

//   document.querySelectorAll(".piano")[i].addEventListener("click", function() {

//     var buttonInnerHTML = this.innerHTML;

//     makeSound(buttonInnerHTML);

//     buttonAnimation(buttonInnerHTML);

//   });
// }


document.addEventListener("keypress", function (event) {
  
  makeSound(event.key);

  buttonAnimation(event.key);
});

function makeSound(key) 
{
  switch (key) {

    case "w":
      let piano1 = new Audio("sounds/do-35686.mp3");
      piano1.play();
      break;

    case "a":
      let piano2 = new Audio("sounds/re-78500.mp3");
      piano2.play();
      break;

    case "s":
      let piano3 = new Audio("sounds/mi-80239.mp3");
      piano3.play();
      break;

    case "d":
      let piano4 = new Audio("sounds/fa-78409.mp3");
      piano4.play();
      break;

    case "v":
      let piano5 = new Audio("sounds/sol-101774.mp3");
      piano5.play();
      break;

    case "j":
      let piano6 = new Audio("sounds/la-80237.mp3");
      piano6.play();
      break;

    case "o":
      let piano7 = new Audio("sounds/si-80238.mp3");
      piano7.play();
      break;

    case "p":
      let piano8 = new Audio("sounds/do-80236.mp3");
      piano8.play();
      break;

    default:
      console.log(key);
  }
}


function buttonAnimation(currentKey) {

  let activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
