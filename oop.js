const user ={
    name: "Komal",
    age: 25,
    isActive: true,
    getUserDetails: function(){
        //console.log("Get user details from the database..")
        // console.log(`Hello ${this.name}`);
        // console.log(this);
    }
}

// console.log(user.name);
// console.log(user.getUserDetails());

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function(){
        console.log(`welcome ${this.name}`);
    }

    return this
}
const userOne = new User("Komal", 12, true)
const userTwo = new User("Sakshi", 13, true)
console.log(userOne);
//console.log(userTwo);
console.log(userOne.constructor);