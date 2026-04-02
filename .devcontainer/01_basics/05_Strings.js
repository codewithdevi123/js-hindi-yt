//const name = "Ashish"
//const repoCount = 50
// console.log(name + repoCount + "Value");
console.log(' hello my name is ${ name} and my repo count is ${repoCounnt');

const gameName = new String ('ashish-ni-so')

// console.log(gameName[0]);
// console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('i'));
const newString = gameName.substring(0,4)
console.log(newString);
const anotherString = gameName.slice(-6,4)
console.log(anotherString);

const newStringOne  = "   Ashish   "
console.log(newStringOne);
console.log(newStringOne.trim());
const url = "https:// Ashish.com/Ashish%20Soni"
console.log(url.replace('%20', '-'))
console.log(url.includes('Ashish'))
console.log(gameName.split('-'));
