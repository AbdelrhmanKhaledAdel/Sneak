


// html elements
let btnDarkMode = document.getElementsByClassName("dark-mode");

let logoImg = document.images[0]
let footerImg = document.images[8]



let el = document.querySelector(".scroller");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
let testimonial = document.querySelectorAll(".testimonial")
let toggle = document.querySelector(".toggle");


window.addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop;
    el.style.width = `${(scrollTop / height) * 100}%`;
})


let header = document.querySelector(".header");

let logo = document.querySelector(".logo")



let button = document.getElementsByClassName("sing-up")[0]

let sing = document.querySelector(".sing a")

button.style.backgroundColor = "#4e6bff"
sing.style.color = "gray"
toggle.style.padding = "17px";
let btn = document.querySelector("button.up")
// scroll

window.addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop;
    if(scrollTop > 40) {
        header.setAttribute("class", "header scroll")
        logo.style.marginTop = "0"
        toggle.style.padding = "0px";

    }else {
        header.setAttribute("class", "header")
        logo.style.marginTop = "12px"

        button.setAttribute("class", "sing-up")
        toggle.style.padding = "17px";

    }
})

//scroll

window.onscroll = function () {
    if(window.scrollY >= 600) {
        btn.classList.add("time");
    }else {
        btn.classList.remove("time");
    }
}
btn.onclick = function () {
    window.scrollTo({
        left:0,
        top: 0,
        behavior: "smooth",
    })
}


function darkMode() {
    let body = document.body;
    body.classList.toggle("dark-theme");

    let theme;

    if(body.classList.contains("dark-theme")) {
        theme = "DARK";
        btnDarkMode[0].classList.replace("bxs-moon", "bx-sun");
    }else {
        theme = "LIGHT";
        btnDarkMode[0].classList.replace("bx-sun", "bxs-moon");
    }
    localStorage.setItem("pageTheme", theme)
}

let getTheme = localStorage.getItem("pageTheme");

if(getTheme == "DARK") {
    document.body.classList = "dark-theme";
    btnDarkMode[0].classList.replace("bxs-moon", "bx-sun");

}


let pages = document.querySelector(".pages");
let megaMenu = document.querySelector(".mega-menu");

pages.addEventListener("click", () => {
    pages.classList.toggle("open")
});

let toggles = document.querySelector(".toggles");
let mainNav = document.querySelector(".main-nav");


toggles.addEventListener("click", () => {
    toggles.classList.toggle("toggle-menu");
});




