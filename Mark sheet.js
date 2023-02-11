let Name= prompt("Enter Your Name ")
let Roll= prompt("Enter Your Examination Number ")


var c1=+prompt("Enter English Marks ")
var c2=+prompt("Enter Urdu Marks ")
var c3=+prompt("Enter Science Marks ")
var c4=+prompt("Enter Account Marks ")
var c5=+prompt("Enter ComputerScience Marks ")

var totalMarks = 500
let obtainedMarks=c1+c2+c3+c4+c5

let percentage=obtainedMarks * 100/ totalMarks

console.log

console.log(`Your Final Result Sheet`)
console.log(`Name ${Name}`)
console.log(`Examination Number ${Roll}`)
console.log(`TotalMarks ${obtainedMarks}`)
console.log(`Obtain % ${percentage}%`)