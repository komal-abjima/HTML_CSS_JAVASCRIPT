const obj1 ={
    firstname: "Komal",
    lastname: "Sharma"
};

const map1 = new Map();
map1.set("firstname", "Komal");
map1.set("lastname", "Sharma");


//using non string keys
map1.set(new Date().getTime(), "Number Key");
map1.set([], "Array Key");
map1.set(() => "Hi", "Function Key");
console.log(map1);

//size
console.log(`Size of a map: ${map1.size}`);

//accsessing values
console.log(`lastname: ${map1.get("lastname")}`);
console.log(map1.get([]));

//deleting the map
map1.delete("lastname");
console.log(`Size : ${map1.size}`);


//Creating the set

const set1 = new Set();
set1.add("Komal");

//size
console.log(`Size of set: ${set1.size}`);

//add same name
set1.add("Komal");
console.log(`Size of set: ${set1.size}`);


//creating complex set
const team1 = new Set();
const emp1 = {
    firstname: "Komal",
    lastname: "Sharma"

}
team1.add(emp1);
console.log(`Size: ${team1.size}`);

//has a value
console.log(`Does have employee: ${team1.has(emp1)}`);

//removing 
team1.delete(emp1);
console.log(`Size ${team1.size}`)

//remove all values
team1.clear();

