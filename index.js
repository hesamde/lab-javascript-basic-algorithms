// Iteration 1:

let hacker1 = "Jon"
console.log(`The driver´s name is ${hacker1}`);

let hacker2 = "Tyrion"
console.log(`The driver´s name is ${hacker2}`);

// Iteration 2:

if ((hacker1.length) > (hacker2.length)) {
    console.log("The driver has the longest name, it has " + hacker1.length + " " + characters)
  } else if ((hacker1.length) < (hacker2.length)) {
    console.log("The navigator has the longest name, it has " + hacker2.length + " " + characters)
  } else {
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters!")
  }
// Iteration 3:

let output = ""

for (let i = 0; i < hacker1.length; i++) {
  output += hacker1[i].toUpperCase() + " "
}

console.log(output.trim())
let hacker2Reverse = ""

for (let i = hacker2.length - 1; i >= 0; i--) {
  hacker2Reverse += hacker2[i]
}

console.log(hacker2Reverse)
 
if (hacker1.localeCompare(hacker2) === -1) console.log("The driver's name goes first")
else if (hacker1.localeCompare(hacker2) === 1) console.log("Yo, the navigator goes first definitely.")
else console.log("What?! You both got the same name?")