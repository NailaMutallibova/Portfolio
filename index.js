var burger = document.querySelector(".burger");
var nav = document.querySelector("nav");
var links = document.querySelectorAll("nav li");
var imageOne = document.querySelectorAll(".imageOne");

burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    links.forEach((links, index) => {
        if (links.style.animation) {
            links.style.animation = " ";
        } else {
            links.style.animation = `fade 1s ease forwards ${index / 5}s`;
        }
    });

    burger.classList.toggle("close");
});

$(".lateWiew").each((callback, el) => {
    console.log(el.style);
    el.style = { display: "none" };
    console.log("found value to show later: ", el);
    let delay = $(el).attr("data-delay");
    console.log(delay);
    ScrollReveal().reveal(el, {
        delay: delay,
        duration: 1000,
        opacity: 0,
        interval: 200,
    });
});

$(document).ready(function () {
    $(".categoryButton").click(function () {
        let categoryId = $(this).attr("data-category-id");
        console.log(categoryId);
        $(".myGame").fadeOut("slow");
        $(".categories" + categoryId).fadeIn("slow");
    });

   
});


document.querySelector("body").addEventListener("scroll", myFunction);
function myFunction() {
  document.querySelector("header").style.backgroundColor = 'rgb(1, 28, 51)'}

