// ? Question-1:follow these steps:
// todo-1:Select the body tag and apply this color to the background "#0a122d"
// todo-2:select image and set margin "4rem 0"
// todo-3:Apply a rounded border to the image and set its size to "1 rem"
// todo-4:Select h1 and h5 tags and place them in the appropriate position according to the image.(you can check help folder)
// !Answer:
const body = document.querySelector("body");
body.style.backgroundColor = "#0a122d";
const img = document.querySelector("img");
img.style.margin = "4rem 0";
img.style.borderRadius = "1rem";
const h1 = document.querySelector("h1");
const h5 = document.querySelector("h5");
const circles = document.querySelector(".circles");
const container = document.querySelector(".container");

h1.style.position = "absolute";
h1.style.top = "6rem";
h1.style.left = "2rem";

h5.style.position = "absolute";
h5.style.top = "8rem";
h5.style.left = "2rem";
