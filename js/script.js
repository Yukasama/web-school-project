
const icon = document.querySelector(".nav_icon");
const wave1 = document.querySelector(".wave1");
const wave2 = document.querySelector(".wave2");
const wave3 = document.querySelector(".wave3");
const wave4 = document.querySelector(".wave4");
icon.onclick = function() {
    document.body.classList.toggle("dark");
    wave1.classList.toggle("dark");
    wave2.classList.toggle("dark");
    wave3.classList.toggle("dark");
    wave4.classList.toggle("dark");
    if(document.body.classList.contains("dark")) {
        icon.innerHTML = "light_mode";
    } else {
        icon.innerHTML = "dark_mode";
    }
}


const hamburger = document.querySelector(".hamburger");
const nav_container = document.querySelector(".nav_container_2");
hamburger.onclick = function() {
    nav_container.classList.toggle("open");
    hamburger.classList.toggle("open");
    if (nav_container.classList.contains("open")) {
        document.body.style.overflowY = "hidden";
    } else {
        document.body.style.overflowY = "scroll";
    }
}


const about_icon = document.querySelector(".about_icon");
const about_container_i = document.querySelector(".about_container_i");
about_icon.onclick = function() {
    about_icon.classList.toggle("show");
    about_container_i.classList.toggle("show");
}



var navbar = document.querySelector(".navbar");
window.addEventListener("scroll", function() {
    navbar.classList.toggle("scroll", window.scrollY > 50);
})


const writer = document.querySelector(".main_writer");
function writing() {
    setTimeout(() => {
        writer.innerHTML = "Ethereum";
    }, 0000);
    setTimeout(() => {
        writer.innerHTML = "Avalanche";
    }, 4000);
    setTimeout(() => {
        writer.innerHTML = "Solana";
    }, 8000);
    setTimeout(() => {
        writer.innerHTML = "Polkadot";
    }, 12000);
}
setInterval(writing, 16000);
writing();

const main_icon = document.querySelector(".main_wave_icon");
main_icon.onclick = function() {
    window.style.transform = translateY( + window.scrollY + 1000);
};


const contact = document.querySelector("#contact");
const contact_page1 = document.querySelector(".contact_page1");
const contact_page2 = document.querySelector(".contact_page2");
const circle1 = document.querySelector(".circle1");
const circle2 = document.querySelector(".circle2");
const contact_button = document.querySelector(".contact_button");
contact.onclick = function() {
    contact_page1.classList.toggle("swoosh");
    contact_page2.classList.toggle("swoosh");
    circle1.classList.toggle("swoosh");
    circle2.classList.toggle("swoosh");
    contact_button.classList.toggle("swoosh");
}


const hamburger2 = document.querySelector(".hamburger_2");
hamburger2.onclick = function() {
    contact_page1.classList.remove("swoosh");
    contact_page2.classList.remove("swoosh");
    circle1.classList.remove("swoosh");   
    circle2.classList.remove("swoosh");
    contact_button.classList.remove("swoosh");
}


