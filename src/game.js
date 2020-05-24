var game_color;
var click_count = 0;

game_color = document.getElementById("game-name").style.color;

function new_game_onclick() {
  click_count += 1;
  console.log(click_count);

  if (click_count % 2 === 0) {
    console.log("Equal 2,4,6..");
    document.getElementById("game-name").style.color = game_color;
  } else {
    console.log("Equal 1,3,5..");
    document.getElementById("game-name").style.color = "black";
  }

  document.getElementById("player").style.display = "block";
}
//
function move_left() {
  // alert("move left");

  document.getElementById("player").style.left = "0px";
}
function move_right() {
  var x = Number(
    document.getElementById("player").style.left.replace("px", "")
  );
  x -= 20;
  document.getElementById("player").style.left = x + "px";
  // alert(x);
}
document
  .getElementById("new-game-button")
  .addEventListener("click", new_game_onclick);

// document
//   .getElementById("settings-button")
//   .addEventListener("mouseover", new_game_onclick);

document.getElementById("player").style.left = "935px";
document.getElementById("player").style.top = "500px";
document.getElementById("player").style.width = "100px";
document.getElementById("player").style.height = "100px";

document.getElementById("move_left").addEventListener("click", move_left);
document.getElementById("move_right").addEventListener("click", move_right);
window.addEventListener("keydown", move_right);
