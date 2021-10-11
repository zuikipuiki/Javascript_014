
let colors = ["yellow", "blue", "red", "orange"];

//FOR
for (let i = 0; i < colors.length; i++) {
 const element = colors[i];
 console.log(element);
}
console.log("\n"); // new line

// WHILE 
let i = 0;
while (i < colors.length) {
 console.log(colors[i]);
 i++;
}
console.log("\n"); // new line

colors.forEach(
 function(colors) {
  console.log(colors);
 }
)
;
console.log("\n"); // new line

// forEACH
colors.forEach(colors => {
 console.log(colors);
});

console.log("\n"); // new line

colors.forEach(colors => console.log(colors));