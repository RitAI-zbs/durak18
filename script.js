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
