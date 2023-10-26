


// html elements
let btnDarkMode = document.getElementsByClassName("dark-mode");
let toggle = document.querySelector(".toggle");

let logoImg = document.images[0]
let footerImg = document.images[70]



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

let sing = document.querySelector(".sing a");
button.style.backgroundColor = "#ffffff26"
sing.style.color = "#fff"
toggle.style.padding = "15px";


// scroll

window.addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop;
    if(scrollTop > 40) {
        header.setAttribute("class", "header scroll")
        logo.style.marginTop = "0"
        toggle.style.padding = "0px";
        button.style.backgroundColor = "#4e6bff";
        sing.style.color = "gray"


    }else {
        header.setAttribute("class", "header")
        logo.style.marginTop = "12px"
        button.style.backgroundColor = "#ffffff26";
        button.setAttribute("class", "sing-up")
        toggle.style.padding = "15px";
        sing.style.color = "#fff"



    }
})

let btn = document.querySelector("button.up")

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











const video = document.querySelector(".video")
function openVideo() {
  video.classList.add("videoClicked")
  document.body.style.setProperty("overflow", "hidden")
}
function closeVideo() {
  video.classList.remove("videoClicked")
  document.body.style.removeProperty("overflow")
}




// filter

let gallery = document.getElementById("gallery")

let shopItemsData = [{
    img: "imgs/herowarz-4k-wv-1920x1080.jpg",
    name: "HEROWARZ",
    date: "25 Dec, 2025",
    dataName: "darkSouls"
},{
    img: "imgs/godfall-2020-4k-vz-1920x1080.jpg",
    name: "GOD FALL",
    date: "25 Dec, 2022",
    dataName: "darkSouls"
},{
    img: "imgs/far-cry-6-villain-giancarlo-esposito-10k-cv-1920x1080.jpg",
    name: "FAR CRY 6",
    date: "25 Dec, 2021",
    dataName: "spiderMan"
},{
    img: "imgs/fall-guys-ultimate-knockout-2020-4k-ml-1920x1080.jpg",
    name: "FALL GUYS",
    date: "25 Dec, 2019",
    dataName: "anime"
},{
    img: "imgs/erato-final-fantasy-4k-hw-1920x1080.jpg",
    name: "ERATO FINAL FANTASY",
    date: "25 Dec, 2012",
    dataName: "anime"
},{
    img: "imgs/resident-evil-among-us-4k-2h-1920x1080.jpg",
    name: "AMONG US",
    date: "25 Dec, 2020",
    dataName: "darkSouls"
},{
    img: "imgs/the-falconeer-0x-1920x1080.jpg",
    name: "THE FALCONEER",
    date: "25 Dec, 2025",
    dataName: "spiderMan"
},{
    img: "imgs/assassins-creed-valhalla-female-eivor-axe-8k-bn-1920x1080.jpg",
    name: "Assassins Creed Valhalla",
    date: "25 Dec, 2022",
    dataName: "spiderMan"
},{
    img: "imgs/2023-lies-of-p-5k-jp-1920x1080.jpg",
    name: "Lies Of P",
    date: "25 Dec, 2021",
    dataName: "darkSouls"
},{
    img: "imgs/control-x-cyberpunk-2077-5k-ib-1920x1080.jpg",
    name: "Control X Cyberpunk",
    date: "25 Dec, 2019",
    dataName: "darkSouls"
},{
    img: "imgs/flapjack-cannon-fortnite-4k-9l-1920x1080.jpg",
    name: "Flapjack Cannon Fortnite",
    date: "25 Dec, 2012",
    dataName: "spiderMan"
},{
    img: "imgs/fortnite-2018-victory-royale-39-1920x1080.jpg",
    name: "Fortnite",
    date: "25 Dec, 2018",
    dataName: "anime"
},{
    img: "imgs/pubg-spark-the-flame-4k-gj-1920x1080.jpg",
    name: "PUBG",
    date: "25 Dec, 2025",
    dataName: "spiderMan"
},{
    img: "imgs/phoenix-valorant-4k-2020-3t-1920x1080.jpg",
    name: "Valorant",
    date: "25 Dec, 2022",
    dataName: "anime"
},{
    img: "imgs/wallpaperflare.com_wallpaper000.png",
    name: "DARK SOULS 1",
    date: "25 Dec, 2021",
    dataName: "spiderMan"
},{
    img: "imgs/dark-souls-3-cinder-5k-ix-1920x1080.jpg",
    name: "DARK SOULS 3",
    date: "25 Dec, 2019",
    dataName: "anime"
},{
    img: "imgs/wallpaperflare.com_wallpaper (7).jpg",
    name: " DEMON SLAYER",
    date: "25 Dec, 2012",
    dataName: "darkSouls"
},{
    img: "imgs/wallpaperflare.com_wallpaper (19).jpg",
    name: "MONSTER",
    date: "25 Dec, 2018",
    dataName: "anime"
}]

let generategallery  = () => {
    return (gallery.innerHTML = shopItemsData.map((x) => {
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

generategallery()


const filterIcon = document.querySelectorAll(".items span");
const filterableCards = document.querySelectorAll(".gallery .free"); 

// console.log(filterIcon, filterableCards)

const filterCards = e => {
    document.querySelector(".how").classList.remove("how");
    e.target.classList.add("how");

    filterableCards.forEach(card => {
        card.classList.add("hide");

        if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
            card.classList.remove("hide")
        }
    })
}
    

filterIcon.forEach(button => button.addEventListener("click", filterCards))


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

function check() {
    const checkbox = document.querySelector(".checkbox")
    const priceOne = document.querySelector(".One")
    const priceTwo = document.querySelector(".Two")
    const pricethere = document.querySelector(".Three")
      if (checkbox.checked == true) {
        priceOne.innerHTML = "<div><h3>$149</h3>/per year</div>"
        priceTwo.innerHTML = "<div><h3>$608</h3>/per year</div>"
        pricethere.innerHTML = "<div><h3>$1568</h3>/per year</div>"
      } else {
        priceOne.innerHTML = "<div><h3>$29</h3>/per month</div>"
        priceTwo.innerHTML = "<div><h3>$59</h3>/per month</div>"
        pricethere.innerHTML = "<div><h3>$139</h3>/per month</div>" 
      };}
             