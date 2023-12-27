//IIFE = Immediately Invoked Function Expression
//we use this concept to prevent from global scope pollution 

//named IIFE
(function num() {
    console.log(`DB Connected...`)
})();

((name) =>{
    console.log(`Hello ${name}`)
})("Komal");