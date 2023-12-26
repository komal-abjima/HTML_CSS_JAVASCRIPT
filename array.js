const arr1 = [1,2,3,4,5];

//join() bind the array and convert the array into string
const newarr1 = arr1.join();
// console.log(arr1);
// console.log(newarr1);

//splice and slice
console.log("A", arr1);

const myn1 = arr1.slice(1,3);
console.log(myn1);
console.log("B" , arr1);

const myn2 = arr1.splice(1,3);
console.log("C", arr1);
console.log(myn2);

//flat() joins all the subarrys in single array
const arr2 = [1,2, [3,4], 5,6, [7,8, [9, 10]]];
console.log(arr2);
const realarray = arr2.flat(Infinity);
console.log(realarray);

console.log(Array.isArray("Komal"));
console.log(Array.from("Komal"));
console.log(Array.from({name: "Komal"}));

let score1 = 300;
let score2 = 500;
let score3 = 300;

console.log(Array.of(score1, score2, score3));

//other arrays method are
//conact()
//spreaed()
//push()
//pop()
//shift()
//unshift()
//indexof()
