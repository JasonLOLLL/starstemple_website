const carousel_items = document.getElementsByClassName("carousel");
const arrayLength = carousel_items.length;
const carouselForwardButton = document.getElementById("carousel-forward-button");
const carouselBackwardButton = document.getElementById("carousel-backward-button");
const pageNumber = document.getElementById("page-number");

const menuButton = document.getElementById("menu");
const menuContainer = document.querySelector(".menu-container");
const menuDiv = document.getElementById("menu-nav");

updatePageNumber = () => {
    pageNumber.innerHTML = (currentItem+1) + " of " + arrayLength;
}

let currentItem = 0;
carouselForwardButton.addEventListener("click", function() {
    currentItem++;
    if (typeof carousel_items[currentItem] != "undefined") {
        carousel_items[currentItem - 1].classList.add("hidden");
        carousel_items[currentItem].classList.remove("hidden");
    } else {
        carousel_items[currentItem - 1].classList.add("hidden");
        currentItem = 0;
        carousel_items[currentItem].classList.remove("hidden");
    }
    updatePageNumber();
})

carouselBackwardButton.addEventListener("click", function () {
    currentItem--;

    if (typeof carousel_items[currentItem] != "undefined") {
        carousel_items[currentItem + 1].classList.add("hidden");
        carousel_items[currentItem].classList.remove("hidden");
    } else {
        carousel_items[currentItem + 1].classList.add("hidden");
        currentItem = arrayLength-1;
        carousel_items[currentItem].classList.remove("hidden");
    }
    updatePageNumber();
})

// Header fades into solid blue color when scrolling past home page
window.addEventListener("scroll", function() {
    const header = document.querySelector(".wrapper");
    header.classList.toggle("sticky", window.scrollY > 0);
});

// Mobile menu

menuButton.addEventListener("click", function() {
    if (menuContainer.style.display == "flex") {
        menuContainer.style.display = "none";
    } else {
        menuContainer.style.display = "flex";
    }
});

menuClose = () => {
    menuContainer.style.display = "none";
}
