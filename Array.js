import createPrompt from  'prompt-sync'
let prompt = createPrompt();

//declaring arrays 
let arr1 = [];
let arr2 = ["Item1, Item2"];
let arr3 = new Array();
let arr4 = new Array("Item1", "Item2");

//accessing arrays
let arr = ["A", "B", "C", "D"];
console.log(`Arrays Length: ${arr.length}`);
console.log(`First position: ${arr[0]}`);

//searching array
const searchA = arr.includes("B");
console.log(`Includes A ${searchA}`);
const searchC = arr.indexOf("C");
console.log(`Includes B ${searchA}`);

//adding in an array at the end
arr.push("E");
console.log(arr);
//adding in an array at the beginning
arr.unshift("0");
console.log(arr);

//adding values at specific position
arr.splice(1,2, "F");
console.log(arr);

//removing value at specific 
arr.splice(2, 1);
console.log(arr);

//removing at beginning
arr.shift();
console.log(arr);

//removing at end
arr.pop();
console.log(arr);


//arrays and objects
const obj1 = {
    firstname: "Komal",
    lastname:"Sharma"
};

const obj2 = {
    firstname: "Shivam",
    lastname: "Sharma"
};
const obj3 = {
    firstname:"Sakshi",
    lastname: "Sharma"
};

let employees = [obj1, obj2];
console.log(`It's an identical ${employees.includes(obj3)}`);
console.log(`Its same array: ${employees.includes(obj1)}`);




