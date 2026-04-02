// 1.) Primitive
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// 2.) Reference (Non Primitiv)
// Array, Objects, Functions        

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
//console.log(id === anotherId);

//const bigNumber =773700081256123232111n
const heros = ["krish", "balveer", "bhim"]
let myObj = {
    name: "Ashish",
age: 22
}

const myFunction = function (){
    console.log("hello world");
}
//console.log(typeof bigNumber);
// console.log(typeof outsideTemp);
//datatypes table link => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures

//*********************************************************************//

// two types of memory js
//1.stack (primitive), 2.Heap (Non primitive) 

let myyoutubename = "Aapkuahnhai"
// this is primitive typ 
let anothername = myyoutubename
anothername = "ashishwithcode"
console.log(myyoutubename);
    
console.log(anothername);
let userOne = { Email: "user@google.com",
    upi: "use@ybl"
}

let userTwo = userOne
userTwo.Email = "Ashish@google.com"
console.log(userOne.Email);
console.log(userTwo.Email);

