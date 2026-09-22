/* ==========================
   PRODUCT SERVICES REPORT JS
========================== */



// ==========================
// SMOOTH SCROLL BUTTON
// ==========================


function scrollReport(){

    document
    .getElementById("about")
    .scrollIntoView({

        behavior:"smooth"

    });

}






// ==========================
// FADE IN ON SCROLL
// ==========================


const revealElements = document.querySelectorAll(

"section, .card, .timeline-item, .feature-card, .future-card, .case-study > div"

);



const revealObserver = new IntersectionObserver(

(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("show");


}

});


},

{

threshold:0.15

}


);



revealElements.forEach(element=>{


element.classList.add("reveal");


revealObserver.observe(element);


});









// ==========================
// NAVBAR ACTIVE LINK
// ==========================


const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".navbar a");



window.addEventListener("scroll",()=>{


let current="";


sections.forEach(section=>{


const sectionTop = section.offsetTop - 150;


if(window.scrollY >= sectionTop){


current = section.getAttribute("id");


}


});



navLinks.forEach(link=>{


link.style.color="white";


if(link.getAttribute("href") === "#" + current){


link.style.color="#00a8ff";


}


});


});










// ==========================
// HERO PARALLAX EFFECT
// ==========================


const hero = document.querySelector(".hero");



window.addEventListener("scroll",()=>{


let offset = window.pageYOffset;


if(hero){


hero.style.backgroundPositionY = offset * 0.4 + "px";


}


});









// ==========================
// CARD HOVER EFFECT
// ==========================


const cards = document.querySelectorAll(".card");



cards.forEach(card=>{


card.addEventListener("mouseenter",()=>{


card.style.transform="translateY(-12px)";


});




card.addEventListener("mouseleave",()=>{


card.style.transform="translateY(0)";


});


});









// ==========================
// NUMBER COUNTER EFFECT
// ==========================


const numbers = document.querySelectorAll(".number");



numbers.forEach(num=>{


num.addEventListener("mouseenter",()=>{


num.style.transform="scale(1.15)";


});



num.addEventListener("mouseleave",()=>{


num.style.transform="scale(1)";


});


});









// ==========================
// IMAGE LAZY LOADING
// ==========================


const images = document.querySelectorAll("img");



images.forEach(img=>{


img.loading="lazy";


});









// ==========================
// PAGE LOAD ANIMATION
// ==========================


window.addEventListener("load",()=>{


document.body.classList.add("loaded");


});









// ==========================
// BACK TO TOP SUPPORT
// ==========================


const backTop = document.createElement("button");


backTop.innerHTML="↑";


backTop.className="back-top";


document.body.appendChild(backTop);




window.addEventListener("scroll",()=>{


if(window.scrollY > 600){


backTop.style.display="block";


}

else{


backTop.style.display="none";


}


});





backTop.addEventListener("click",()=>{


window.scrollTo({

top:0,

behavior:"smooth"

});


});
