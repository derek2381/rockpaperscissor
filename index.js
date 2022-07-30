alert("Welcome to the rock paper scissors simulator")
alert("enter 1-for ROCK, 2-for PAPER and 3-for SCISSORS.");

var choice = prompt("Enter your choice.");

var randomChoice = Math.floor(Math.random() * 3) + 1;
alert(randomChoice);
var randomImageSourceWin1 = "images/win1.jpeg";
var randomImageSourceWin2 = "images/win2.jpeg";
var randomImageSourceWin3 = "images/win3.jpeg";
var randomImageSourceSleeping1 = "images/sleeping1.jpeg";
var randomImageSourceSleeping2 = "images/sleeping2.jpeg";
var randomImageSourceSleeping3 = "images/sleeping3.jpeg";
var randomImageSourceLoose1 = "images/loose1.jpeg";
var randomImageSourceLoose2 = "images/loose2.jpeg";
var randomImageSourceLoose3 = "images/loose3.jpeg";
var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];
var image3 = document.querySelectorAll("img")[2];
var image4 = document.querySelectorAll("img")[3];
if (choice == 1) {

  if (randomChoice == 1) {
    // alert("draw.");
    image1.setAttribute("src", randomImageSourceSleeping1);
    image2.setAttribute("src", randomImageSourceSleeping2);
    image3.setAttribute("src", randomImageSourceSleeping3);
    document.querySelector("h2").innerHTML = "🚩 DRAW  🚩";
  } else if (randomChoice == 3) {
    // alert("you win.");
    image1.setAttribute("src", randomImageSourceWin1);
    image2.setAttribute("src", randomImageSourceSleeping2);
    image3.setAttribute("src", randomImageSourceLoose3);
    image4.setAttribute("src", randomImageSourceWin1);
    document.querySelector("h2").innerHTML = "🚩 YOU WIN!";
  } else {
    // alert("computer win.");
    image1.setAttribute("src", randomImageSourceLoose1);
    image2.setAttribute("src", randomImageSourceWin2);
    image3.setAttribute("src", randomImageSourceSleeping3);
    image4.setAttribute("src", randomImageSourceWin2);
    document.querySelector("h2").innerHTML = "COMPUTER WON! 🚩";
  }

} else if (choice == 2) {

  if (randomChoice == 2) {
    // alert("draw.");
    image1.setAttribute("src", randomImageSourceSleeping1);
    image2.setAttribute("src", randomImageSourceSleeping2);
    image3.setAttribute("src", randomImageSourceSleeping3);
    document.querySelector("h2").innerHTML = "🚩 DRAW 🚩";
  } else if (randomChoice == 1) {
    // alert("you win.");
    image1.setAttribute("src", randomImageSourceLoose1);
    image2.setAttribute("src", randomImageSourceWin2);
    image3.setAttribute("src", randomImageSourceSleeping3);
    image4.setAttribute("src", randomImageSourceWin2);
    document.querySelector("h2").innerHTML = "🚩 YOU WIN!";
  } else {
    // alert("computer wins.");
    image1.setAttribute("src", randomImageSourceSleeping1);
    image2.setAttribute("src", randomImageSourceLoose2);
    image3.setAttribute("src", randomImageSourceWin3);
    image4.setAttribute("src", randomImageSourceWin3);
    document.querySelector("h2").innerHTML = "COMPUTER WON! 🚩";
  }

} else if (choice == 3) {

  if (randomChoice == 1) {
    // alert("computer wins.");
    image1.setAttribute("src", randomImageSourceWin1);
    image2.setAttribute("src", randomImageSourceSleeping2);
    image3.setAttribute("src", randomImageSourceLoose3);
    image4.setAttribute("src", randomImageSourceWin1);
    document.querySelector("h2").innerHTML = "COMPUTER WON! 🚩";
  } else if (randomChoice == 2) {
    // alert("you win.");
    image1.setAttribute("src", randomImageSourceSleeping1);
    image2.setAttribute("src", randomImageSourceLoose2);
    image3.setAttribute("src", randomImageSourceWin3);
    image4.setAttribute("src", randomImageSourceWin3);
    document.querySelector("h2").innerHTML = "🚩 YOU WIN!";
  } else {
    // alert("Draw.")
    image1.setAttribute("src", randomImageSourceSleeping1);
    image2.setAttribute("src", randomImageSourceSleeping2);
    image3.setAttribute("src", randomImageSourceSleeping3);
    document.querySelector("h2").innerHTML = "🚩 DRAW 🚩";
  }
}else {
  // alert("wrong choice");
  image1.setAttribute("src", randomImageSourceSleeping1);
  image2.setAttribute("src", randomImageSourceSleeping2);
  image3.setAttribute("src", randomImageSourceSleeping3);
  document.querySelector("h2").innerHTML = "⚠️⚠️ WRONG CHOICE!! ⚠️⚠️";
}
