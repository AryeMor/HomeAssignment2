const menuBtn = document.querySelector(".menuBtn");
// console.log("hello Arye");
// menuBtn.addEventListener("click", console.log(menuBtn));

// function DoSum() {
//   console.log("I was Clicked");
// }
// menuBtn.addEventListener("click", DoSum);

function showMenu() {
  const menu = document.querySelector("header nav");
  if (menu.style.top == "0px") {
    menu.style.top = "-180px";
  } else {
    menu.style.top = "0px";
  }
}
menuBtn.addEventListener("click", showMenu);
