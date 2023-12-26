//singleton object
const user = new Object();


const user1 = {
    id: 1,
    name: {
        fullname: "Komal",
        lastname: "sharma"
    }

}

//console.log(user1.name.fullname);


const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj4 = {5: "a", 6: "b"};


//const obj3  = {obj1, obj2};
//const obj3 = Object.assign(obj1, obj2);
//const obj3 = Object.assign({}, obj1, obj2, obj4);
const obj3 = {...obj1, ...obj2, ...obj4};
console.log(obj3);


//object method
console.log(Object.keys(user1));
console.log(Object.values(user1));
console.log(Object.entries(user1));
console.log(user1.hasOwnProperty('name'));

//desstructure of an object
const {name: propername} = user1;
console.log(propername);





