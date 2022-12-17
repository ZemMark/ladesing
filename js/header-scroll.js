// const header = document.querySelector("[data-header]");
// const bodyTag = document.querySelector("[data-body]");
// const htmlTag = document.querySelector("[data-html]");
// const myTag = document.querySelector("html");

// let scrolled = () => {
//   let dec = scrollY / (bodyTag.scrollHeight - innerHeight);
//   return Math.floor(dec * 10);
// };

// // addEventListener("scroll", () => {
// //
// // });

// addEventListener("scroll", () => {
//   console.log("hello");
//   // header.classList.toggle("set-white");
// });

const headerScroll = document.querySelector("header");
const sectionOne = document.querySelector(".home-intro");
const logoScroll = document.querySelector(".header__logo-icon");
const menuScroll = document.querySelector(".icon__menu");

const sectionOneOptions = { rootMargon: "-500px 0px 0px 0px" };

const sectionOneObserver = new IntersectionObserver(function (
  entries,
  sectionOneObserver
) {
  entries.forEach((entry) => {
    // console.log(entry.target);
    if (!entry.isIntersecting) {
      headerScroll.classList.add("set-white");
      logoScroll.classList.add("logo-scrolled");
      menuScroll.classList.add("logo-scrolled");
    } else {
      headerScroll.classList.remove("set-white");
      logoScroll.classList.remove("logo-scrolled");
      menuScroll.classList.remove("logo-scrolled");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);
