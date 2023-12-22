import createPrompt from 'prompt-sync';
let prompt =  createPrompt();


//simple using setTimeout()
console.log("hello");
setTimeout(() => {

   console.log("Abjima....");
    
}, (2000));


//promise
var ans = new Promise((res, rej) =>{
    var n = Math.floor(Math.random()*10);
    if(n < 5){
        return res();
    }
    else{
        return rej();
    }
})
ans.then(function(){
    console.log("Below");
})
ans.catch(function(){
    console.log("Above");
})

//nested promises
var ans = new Promise(function(res, rej){
    return res("This is first promise..");
})
var p2 = ans.then(function(data){
    console.log(data);
    return new Promise(function(res, rej){
        return res("This is second promise..");
    })
})
p2.then(function(data){
    console.log(data);
})

//fetch()
// function abcd(){
//     fetch(`https://randomuser.me/api/`)
//     .then(function(raw){
//         return raw.json();
//     })
//     .then (function (data){
//         console.log(data);
//     });
// }
// abcd();

//by using async and await
async function abcd(){
    let raw = await fetch(`https://randomuser.me/api/`)
    let ans = await raw.json();
    console.log(ans);
}
abcd();


