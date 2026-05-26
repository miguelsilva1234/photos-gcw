const menuMobile = document.getElementById("menu-mobile");
const nav = document.querySelector("nav");

menuMobile.addEventListener("click", () => {

    nav.classList.toggle("active");

});