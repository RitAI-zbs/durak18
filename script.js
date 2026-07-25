function changeImage(img){

document.getElementById("mainImage").src=img.src;

}

// ---------- HEADER ----------

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 80)
        header.classList.add("scrolled");
    else
        header.classList.remove("scrolled");

});

// ---------- ANIMATION ----------

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".hidden").forEach(el=>{

observer.observe(el);

});

//================ HERO PARALLAX ================

const hero = document.querySelector(".hero");

document.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth/2-e.clientX)/40;

const y=(window.innerHeight/2-e.clientY)/40;

hero.style.backgroundPosition=

`calc(50% + ${x}px)
 calc(50% + ${y}px)`;

});
