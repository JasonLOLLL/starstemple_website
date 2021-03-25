// Cache the DOM variables 
const carousel_items = document.getElementsByClassName("carousel");
const arrayLength = carousel_items.length;
const carouselForwardButton = document.getElementById("carousel-forward-button");
const carouselBackwardButton = document.getElementById("carousel-backward-button");
const pageNumber = document.getElementById("page-number");

const menuButton = document.getElementById("menu");
const menuContainer = document.querySelector(".menu-container");
const menuDiv = document.getElementById("menu-nav");

// function to update the page number on the carousel
updatePageNumber = () => {
    pageNumber.innerHTML = (currentItem+1) + " of " + arrayLength;
}

let currentItem = 0; // current item the carousel is on
carouselForwardButton.addEventListener("click", function() { //for clicking forward
    currentItem++; //increase by one
    if (typeof carousel_items[currentItem] != "undefined") { //detects if there is a 'next' card and if there is, the hide the previous one and reveal the next card in the carousel
        carousel_items[currentItem - 1].classList.add("hidden");
        carousel_items[currentItem].classList.remove("hidden");
    } else {
        carousel_items[currentItem - 1].classList.add("hidden"); // if there is no next card, that means it reached the highest page and needs to return to 0
        currentItem = 0; //back to the first card
        carousel_items[currentItem].classList.remove("hidden");
    }
    updatePageNumber(); //update page element
})

carouselBackwardButton.addEventListener("click", function () { //for clicking backward
    currentItem--; //subtract one current item (going back one card)

    if (typeof carousel_items[currentItem] != "undefined") { //if there is a card before the current one, then hide current one and reveal the last one
        carousel_items[currentItem + 1].classList.add("hidden");
        carousel_items[currentItem].classList.remove("hidden");
    } else {
        carousel_items[currentItem + 1].classList.add("hidden"); //if there is no card, it means it reached 0 and will return to the highest page
        currentItem = arrayLength-1; //set current item to the highest page
        carousel_items[currentItem].classList.remove("hidden"); 
    }
    updatePageNumber();
})

// function > header fades into solid blue color when scrolling past home page
window.addEventListener("scroll", function() {
    const header = document.querySelector(".wrapper");
    header.classList.toggle("sticky", window.scrollY > 0);
});

// Mobile menu
// when menu icon is clicked, open the navigation menu
menuButton.addEventListener("click", function() {
    if (menuContainer.style.display == "flex") {
        menuContainer.style.display = "none";
    } else {
        menuContainer.style.display = "flex";
    }
});

// if link is clicked on, then close the navigation menu
menuClose = () => {
    menuContainer.style.display = "none";
}
