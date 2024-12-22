// ? Question-2:Write a function called "printPersons" that takes an array of persons and displays them on the screen.
const persons = [
  { name: "Alice", age: 18 },
  { name: "Bob", age: 21 },
  { name: "Charlie", age: 15 },
];

function printPersons(array) {
  const p = document.createElement("p");
  const body = document.querySelector("body");
  array.map((item) => {
    p.innerText += " " + item.name;
    body.appendChild(p);
  });
}
printPersons(persons);

// function printPersons(array) {
//   const ul = document.createElement("ul");
//   array.map((item) => {
//     const li = document.createElement("li");
//     li.innerText = item.name;
//     ul.appendChild(li);
//     const body = document.querySelector("body");
//     body.appendChild(ul);
//   });
// }
