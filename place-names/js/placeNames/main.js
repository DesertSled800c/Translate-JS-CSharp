// Put your code here

const names = [
   "Nashville", "Hong Kong", "The back yard", "Earth",
    "London", "The mall", "Ryman Auditorium", "The Great Wall of China"
];

console.log("All Pace Names");

for (const name of names) {
  console.log(name);
}

console.log("")

const theNames = (names) => {
  console.log(`'The' Place Names`)
  names.map((name) => {
   if (name.startsWith("The")) {
     console.log(name)
   }
  })
}

theNames(names)