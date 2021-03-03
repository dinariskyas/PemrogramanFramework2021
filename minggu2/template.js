let fname = "Cristian";
let lname = "Ronaldo";
let age = prompt("Masukan umur Christian Ronaldo!");

// Cara lama
// let result = fname + ' ' + lname + 'is' + age + 'years old';
// alert(result);

// Memakai template strings
let result = `${fname} ${lname} is ${age} years old`;
alert(result);