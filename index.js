/*****  Hamburger menu *****/
const hamburger = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", ()=> {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".menu-link").forEach(n => 
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  
}))

/*****  back to top *****/
/*source code: https://codepen.io/anushalee/pen/GRKmKaw */

const btn = document.querySelector('#button');

window.addEventListener("scroll", function showScroll() {
    const top = window.scrollY;
    if (top > 200) {
       document.querySelector(".scroll-up").style.display = "flex";
    } else {
       document.querySelector(".scroll-up").style.display = "none";      
    }   
});
 
const click = document.querySelector(".scroll-up");
const scrollBox = document.querySelector(".scroll-box");

click.addEventListener("click", function() {
  scrollBox.scrollIntoView({
      behavior: "smooth",
      block: "start"
  });
});


