import createPrompt from  'prompt-sync'
let prompt = createPrompt();


//square pattern
const r = prompt("Enter row number:");
const c = prompt("Enter column number:")
let str = '';
for (let i = 1; i <= r; i++) {
    
    for (let j = 1; j <= c; j++) {
        str += '* ';
    }
    str += '\n';
}
console.log(str);



//triangle pattern without using repeat()
const number = 5;
let string = '';
for (let i = 1; i <= number; i++) {
    
    for (let j = 1; j <= i; j++) {
        str += '* ';
    }
    str += '\n';
}
console.log(str);


//triangle pattern using repeat()
let n = prompt("Enter your number:"); 
for (let i = 1; i <= n; i++) { 
    let str = "* "; 
    console.log(str.repeat(i)); 
}

