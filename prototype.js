let myName = "komal    ";

//console.log(myName.length);
//console.log(myName.trim().length);
//console.log(myName.trueLength);

let fruits = ["apple", "banana"];

let fruitsColor = {
    apple: "red",
    banana: "yellow",

    getFavoriteColor: function(){
        console.log(`My favorite color is ${this.apple}`)
    }
}

Object.prototype.Komal = function(){
    console.log(`komal is present in all objects..`)
}

Array.prototype.heyKomal = function(){
    console.log(`Hello komal..`);
}


//fruitsColor.Komal()
fruits.Komal()
fruits.heyKomal()
//fruitsColor.heyKomal()  it dosent have power


//inheritance concept
const User = {
    name:"Komal",
    isActive:true
}
const Teacher = {
    subject: "Computer"
}
const TeachingSupport ={
    isAvailable: false
}
const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__ : TeachingSupport
}

//old syntax
Teacher.__proto__ = User;

//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUserName = "Komal Sharma"

String.prototype.trueLength = function(){
    console.log(`${this}`);
    //console.log(`${this.name}`);
    console.log(`True Length is : ${this.trim().length}`);

}

anotherUserName.trueLength();
"IceTea".trueLength();
"Hello World!".trueLength();


