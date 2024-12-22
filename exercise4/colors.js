/*
? You have to write a code that changes the color of rectangles upon clicking each color.

- First, look at color-palette1.png . You should create a similar page.
- There are seven colored circles, and upon clicking each circle, the rectangles will change their color. You can find the color codes for the circles below.
- The color chosen will be applied to the first rectangle, and subsequent rectangles will be assigned colors from its spectrum.
- hint: you can modify the alpha (a) of the rgba color to create the spectrum color 
- For example, you can refer to photo color-palette2.png 2, it is for the time when the green color is clicked.

rgba(31, 127, 102, 1)
rgba(255, 200, 0, 1)
rgba(255, 123, 0, 1)
rgba(216, 1, 1, 1)
rgba(223, 4, 70, 1)
rgba(127, 31, 85, 1) 
rgba(93, 18, 199, 1)
rgba(93, 18, 199, 1)
*/
const circle1 = document.querySelector("div.c1");
const circle2 = document.querySelector("div.c2");
const circle3 = document.querySelector("div.c3");
const circle4 = document.querySelector("div.c4");
const circle5 = document.querySelector("div.c5");
const circle6 = document.querySelector("div.c6");
const circle7 = document.querySelector("div.c7");
const circle8 = document.querySelector("div.c8");

const square = document.querySelectorAll(".square");
circle2.addEventListener("click", () => {
  square[0].style.backgroundColor = "rgba(255, 200, 0, 1)";
  square[1].style.backgroundColor = "rgba(255, 200, 0, 0.9)";
  square[2].style.backgroundColor = "rgba(255, 200, 0, 0.5)";
  square[3].style.backgroundColor = "rgba(255, 200, 0, 0.4)";
  square[4].style.backgroundColor = "rgba(255, 200, 0,0.21)";
});

//   const changeColor = getComputedStyle(circle1).backgroundColor;
circle1.addEventListener("click", () => {
  square[0].style.backgroundColor = "rgba(31, 127, 102, 1 )";
  square[1].style.backgroundColor = "rgba(31, 127, 102, 0.9)";
  square[2].style.backgroundColor = "rgba(31, 127, 102, 0.5)";
  square[3].style.backgroundColor = "rgba(31, 127, 102, 0.4)";
  square[4].style.backgroundColor = "rgba(31, 127, 102, 0.2)";
});
circle3.addEventListener("click", () => {
  square[0].style.backgroundColor = "rgba(255, 123, 0, 1)";
  square[1].style.backgroundColor = "rgba(255, 123, 0, 0.9)";
  square[2].style.backgroundColor = "rgba(255, 123, 0, 0.5)";
  square[3].style.backgroundColor = "rgba(255, 123, 0, 0.4)";
  square[4].style.backgroundColor = "rgba(255, 123, 0, 0.2)";
});
circle4.addEventListener("click", () => {
  square[0].style.backgroundColor = "rgba(216, 1, 1, 1)";
  square[1].style.backgroundColor = "rgba(216, 1, 1, 0.9)";
  square[2].style.backgroundColor = "rgba(216, 1, 1, 0.5)";
  square[3].style.backgroundColor = "rgba(216, 1, 1, 0.4)";
  square[4].style.backgroundColor = "rgba(216, 1, 1, 0.2)";
});
circle5.addEventListener("click", () => {
  square[0].style.backgroundColor = "rgba(223, 4, 70, 1)";
  square[1].style.backgroundColor = "rgba(223, 4, 70, 0.9)";
  square[2].style.backgroundColor = "rgba(223, 4, 70, 0.5)";
  square[3].style.backgroundColor = "rgba(223, 4, 70, 0.4)";
  square[4].style.backgroundColor = "rgba(223, 4, 70, 0.2)";
});
circle6.addEventListener("click", () => {
  square[0].style.backgroundColor = "rgba(127, 31, 85, 1 )";
  square[1].style.backgroundColor = "rgba(127, 31, 85, 0.9)";
  square[2].style.backgroundColor = "rgba(127, 31, 85, 0.5)";
  square[3].style.backgroundColor = "rgba(127, 31, 85, 0.4)";
  square[4].style.backgroundColor = "rgba127, 31, 85, 0.2)";
});
circle7.addEventListener("click", () => {
  square[0].style.backgroundColor = "rgba(93, 18, 199, 1 )";
  square[1].style.backgroundColor = "rgba(93, 18, 199, 0.9)";
  square[2].style.backgroundColor = "rgba(93, 18, 199, 0.5)";
  square[3].style.backgroundColor = "rgba(93, 18, 199, 0.4)";
  square[4].style.backgroundColor = "rgba(93, 18, 199, 0.2)";
});
