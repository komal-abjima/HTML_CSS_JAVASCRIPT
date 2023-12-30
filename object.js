function multiplyBy5(num){
    return num * 5;
}
multiplyBy5.power = 2
console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

function createUser(username, score){
    this.username = username
    this.score = score
}
createUser.prototype.increment = function(){
    this.score++;

}
createUser.prototype.prineMe = function(){
    console.log(`score is ${this.score}`);
}
const num1 = new createUser("number1", 45);
const num2 = createUser("number2", 445);

num1.prineMe();


//a new object is created
//a prototype is linked
//the constructor is called
//the new object is returned
