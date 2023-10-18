


// html elements
let btnDarkMode = document.getElementsByClassName("dark-mode");

let logoImg = document.images[0]
let footerImg = document.images[4]



let el = document.querySelector(".scroller");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
let testimonial = document.querySelectorAll(".testimonial")


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

// scroll

window.addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop;
    if(scrollTop > 40) {
        header.setAttribute("class", "header scroll")
        logo.style.marginTop = "0"


    }else {
        header.setAttribute("class", "header")
        logo.style.marginTop = "12px"

        button.setAttribute("class", "sing-up")

    }
})

let btn = document.querySelector("button.up")

//scroll

window.onscroll = function () {
    if(window.scrollY >= 60) {
        btn.style.display = "block";
    }else {
        btn.style.display = "none";
    }
}
btn.onclick = function () {
    window.scrollTo({
        left:0,
        top: 0,
        behavior: "smooth",
    })
}


// // Dark mode 
btnDarkMode[0].onclick = function () {
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")) {
        // button
        btnDarkMode[0].className = "fa-solid fa-sun dark-mode";
        

        //logo
        logoImg.src = "imgs/logo-dark.svg";
        footerImg.src = "imgs/logo-dark.svg"
    }else {
        // button
        btnDarkMode[0].className = "fa-solid fa-moon dark-mode";




        //logo
        logoImg.src = "imgs/logo-light.svg";
        footerImg.src = "imgs/logo-light.svg";
    }
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














console.log()