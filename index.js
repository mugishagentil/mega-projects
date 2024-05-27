
const durations = [4,4.8, 4.5, 4, 3.5,3,2.5,2,1.5, 1, 0.5, 0.1,0.3,0.5,0.9,1,1.5,2,2.5,3,3.5,4,5,6,7,8,9,10,20,30,50,0,0,0,0, 0];
const img = document.getElementById('image');
let currentIndex = 0;

function setAnimationDuration() {
    img.style.animationDuration = durations[currentIndex] + 's';
    currentIndex = currentIndex + 1//(currentIndex + 1) % durations.length; // Loop back to the beginning if reached the end
    setTimeout(setAnimationDuration, 1000); // Delay of 1 second between each iteration
}

setAnimationDuration();

let usersSection = document.querySelector(".member-container");
let isShow = true;
function showHideUsers() {
    if (isShow) {
    usersSection.style.display = "none";
    isShow = false;
    } else {
        usersSection.style.display = "block";
        isShow = true;
    }
}

let usersSections = document.querySelector(".signup");
let isShows = true;
function showHideUsers2() {
    if (isShows) {
    usersSections.style.display = "none";
    isShows = false;
    } else {
        usersSections.style.display = "block";
        isShows = true;
    }
}