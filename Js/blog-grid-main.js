


// html elements
let btnDarkMode = document.getElementsByClassName("dark-mode");

let logoImg = document.images[0];

let menu = document.getElementsByClassName("menu");





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

window.onscroll = function () {
    if(window.scrollY >= 600) {
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
        document.images[20].src = "imgs/logo-dark.svg";
    }else {
        // button
        btnDarkMode[0].className = "fa-solid fa-moon dark-mode";




        //logo
        logoImg.src = "imgs/logo-light.svg";
        document.images[20].src = "imgs/logo-light.svg";
    }
}





// filter

let cards = document.getElementById("cards")

let shopItemsData = [{
    img: "imgs/herowarz-4k-wv-1920x1080.jpg",
    name: "HEROWARZ",
    date: "25 Dec, 2025",
    dataName: "one"
},{
    img: "imgs/godfall-2020-4k-vz-1920x1080.jpg",
    name: "GOD FALL",
    date: "25 Dec, 2022",
    dataName: "one"
},{
    img: "imgs/far-cry-6-villain-giancarlo-esposito-10k-cv-1920x1080.jpg",
    name: "FAR CRY 6",
    date: "25 Dec, 2021",
    dataName: "two"
},{
    img: "imgs/fall-guys-ultimate-knockout-2020-4k-ml-1920x1080.jpg",
    name: "FALL GUYS",
    date: "25 Dec, 2019",
    dataName: "three"
},{
    img: "imgs/erato-final-fantasy-4k-hw-1920x1080.jpg",
    name: "ERATO FINAL FANTASY",
    date: "25 Dec, 2012",
    dataName: "three"
},{
    img: "imgs/resident-evil-among-us-4k-2h-1920x1080.jpg",
    name: "AMONG US",
    date: "25 Dec, 2020",
    dataName: "one"
},{
    img: "imgs/the-falconeer-0x-1920x1080.jpg",
    name: "THE FALCONEER",
    date: "25 Dec, 2025",
    dataName: "two"
},{
    img: "imgs/assassins-creed-valhalla-female-eivor-axe-8k-bn-1920x1080.jpg",
    name: "Assassins Creed Valhalla",
    date: "25 Dec, 2022",
    dataName: "two"
},{
    img: "imgs/2023-lies-of-p-5k-jp-1920x1080.jpg",
    name: "Lies Of P",
    date: "25 Dec, 2021",
    dataName: "one"
},{
    img: "imgs/control-x-cyberpunk-2077-5k-ib-1920x1080.jpg",
    name: "Control X Cyberpunk",
    date: "25 Dec, 2019",
    dataName: "one"
},{
    img: "imgs/flapjack-cannon-fortnite-4k-9l-1920x1080.jpg",
    name: "Flapjack Cannon Fortnite",
    date: "25 Dec, 2012",
    dataName: "two"
},{
    img: "imgs/fortnite-2018-victory-royale-39-1920x1080.jpg",
    name: "Fortnite",
    date: "25 Dec, 2018",
    dataName: "three"
},{
    img: "imgs/pubg-spark-the-flame-4k-gj-1920x1080.jpg",
    name: "PUBG",
    date: "25 Dec, 2025",
    dataName: "two"
},{
    img: "imgs/phoenix-valorant-4k-2020-3t-1920x1080.jpg",
    name: "Valorant",
    date: "25 Dec, 2022",
    dataName: "three"
},{
    img: "imgs/wallpaperflare.com_wallpaper.jpg",
    name: "DARK SOULS 1",
    date: "25 Dec, 2021",
    dataName: "two"
},{
    img: "imgs/dark-souls-3-cinder-5k-ix-1920x1080.jpg",
    name: "DARK SOULS 3",
    date: "25 Dec, 2019",
    dataName: "three"
},{
    img: "imgs/wallpaperflare.com_wallpaper (7).jpg",
    name: " DEMON SLAYER",
    date: "25 Dec, 2012",
    dataName: "one"
},{
    img: "imgs/wallpaperflare.com_wallpaper (19).jpg",
    name: "MONSTER",
    date: "25 Dec, 2018",
    dataName: "three"
}]

let generatecards  = () => {
    return (cards.innerHTML = shopItemsData.map((x) => {
        let {img, name, date, dataName} = x;
        return `
        <div class="free" data-name="${dataName}">
            <div class="code">
                <img src="${img}" alt="">
                <div class="read">
                    <a href="#"><i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
            <div class="skill">
                <h3>${name}</h3>
                <div class="your">
                    <p>${date}</p>
                </div>
                <h4>Tips to quickly improve your coding speed.</h4>
            </div>
        </div>`
    }).join(""))
};

generatecards()


const filterSpan = document.querySelectorAll(".icons span");
const filterableCards = document.querySelectorAll(".cards .free");

// console.log(filterSpan, filterableCards)

const filterCards = e => {
    document.querySelector(".color").classList.remove("color");
    e.target.classList.add("color");

    filterableCards.forEach(card => {
        card.classList.add("hide");

        if(card.dataset.name === e.target.dataset.name ) {
            card.classList.remove("hide");
        }
    });
};

filterSpan.forEach(button => button.addEventListener("click", filterCards))



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