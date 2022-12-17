// const header = document.querySelector("[data-header]");
const openMenuBtn = document.querySelector("[data-header-bgc]");
const header = document.querySelector("[data-header]");
const bodyTag = document.querySelector("body");

openMenuBtn.addEventListener("click", function () {
  header.classList.toggle("bgc");
});

// openMenuBtn.addEventListener("click", () => {
//   header.classList.toggle("bgc");
// });

// let scrolled = () => {
//   let dec = scrollY / (bodyTag.scrollHeight - innerHeight);
//   return Math.floor(dec * 10);
// };

// addEventListener("scroll", () => {
//
// });

// bodyTag.addEventListener("scroll", (scrolled) => {
//   console.log("hello");
//   header.classList.toggle("set-white");
// });
