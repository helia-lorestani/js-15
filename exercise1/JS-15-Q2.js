// ? Question-2:Select all spans  with the 'circle' class and write a code to change classes that have 'blue' with 'purple' and vice versa

// !Answer:
const a = document.querySelectorAll(".circle");

for (let i = 0; i < a.length; i++) {
  if (a[i].classList.contains("blue")) {
    a[i].classList.remove("blue");
    a[i].classList.add("purple");
  } else {
    a[i].classList.remove("purple");
    a[i].classList.add("blue");
  }
}
