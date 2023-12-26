//singleton object
//Object.create 


//object literals



//creating symbol
const  mysym = Symbol("Key1");

const jsUser = {
    name: "Komal",
    "fullname" : "Komal Sharma",
    //for using symbole we have to use here []
    [mysym] : "Keyuser1",
    age: 25,
    email: "Ks@gmail.com",
    isActive: true
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["fullname"]);
// console.log(jsUser[mysym]);


// jsUser.email ="Koko@abc.com";
// console.log(jsUser);
// Object.freeze(jsUser);
// jsUser.email ="koko@mail.com";
// console.log(jsUser);

jsUser.greeting = function(){
    console.log(`Hello js, ${this.name}`);
}

//it only return reference
console.log(jsUser.greeting);
//it returns value
console.log(jsUser.greeting());