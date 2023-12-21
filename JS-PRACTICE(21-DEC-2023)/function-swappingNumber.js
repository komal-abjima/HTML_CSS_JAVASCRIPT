import createPrompt from 'prompt-sync';
let prompt = createPrompt();

let n1 = parseInt(prompt('Enter number 1: '));
let n2 = parseInt(prompt("Enter number 2:"));

console.log("Swapping of two numbers without using third variable--");

n1 = n1 - n2;
n2 = n1 + n2;
n1 = n2 - n1;

console.log(`After swapping Number 1: ${n1} \n Number 2: ${n2}`);


//swapping using third variable

let n3;
n3 = n1;
n1 = n2;
n2 = n3;
console.log(`After swapping Number 1: ${n1} \n Number 2: ${n2}`);