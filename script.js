const navLinks = document.querySelectorAll(".nav-menu .nav-link")
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

// nav-links-
navLinks.forEach(link => {
    link.addEventListener("click", () => menuOpenButton.click());
})

menuOpenButton.addEventListener("click", () => {
    //toggle mobile menu
    document.body.classList.toggle("show-mobile-menu")
});
// icon-buttons for nav-links
menuCloseButton.addEventListener("click", () => menuOpenButton.click())