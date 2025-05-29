const navBtn = document.querySelector("nav .fa-bars");
const navUl = document.querySelector("nav .navMid");

navBtn.addEventListener("click", e => {
    if (navUl.style.minHeight == "" || navUl.style.minHeight == "0rem") {
        navUl.style.minHeight = "22rem";
    } else {
        navUl.style.minHeight = "0rem";
    }
})
navUl.addEventListener("click", e => {
    navUl.style.minHeight = "0rem";
})

document.querySelector(".scrollContent").addEventListener("click", () => {
    if (navUl.style.minHeight == "22rem") {
        navUl.style.minHeight = "0rem";
    }
})
