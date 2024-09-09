// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")

// console.log(id == anotherId)


// const bigNumber = 3446542347949499n;



// Reference type(non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]

 let myObj = {
    name: "gufran",
    age: 22,
}

const myfunction = function(){
    console.log("Hello world");
    
}


// console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


// ++++++++++++++++++++++++++++++++++++++++++++++

// Stack(primitive type), Heap(Non-primitive)

let myYoutubename = "hiteshchoudharydotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"
console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "mdgufranalam73210@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);

