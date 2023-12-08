// const menu = document.querySelector(".test_button1");
// const close = document.querySelector(".test_button2");

// document.querySelector(".test_button1").addEventListener("click", function () {
//   menu.classList.add("hide");
//   close.classList.add("nothide");
// });
// document.querySelector(".test_button2").addEventListener("click", function () {
//   close.classList.remove("nothide");
//   menu.classList.remove("hide");
//   menu.classList.add("nothide");
// });

// // iconbuttonmenu.classList.remove("hidden");

const menuBtn = document.querySelector(".menuBtn");
const closeBtn = document.querySelector(".closeBtn");
const show = document.querySelector(".show");
const hidden = document.querySelector(".hidden");
const notHidden = document.querySelector(".notHidden");
const navListItem = document.querySelector(".navListItem");

document.querySelector(".menuBtn").addEventListener("click", function () {
  console.log("WOrking");
  menuBtn.classList.add("hidden");
  navListItem.classList.add("show");
  closeBtn.classList.add("show");
});
document.querySelector(".closeBtn").addEventListener("click", function () {
  closeBtn.classList.remove("show");
  navListItem.classList.remove("show");
  menuBtn.classList.remove("hidden");
});
