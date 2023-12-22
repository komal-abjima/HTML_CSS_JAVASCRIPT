import fs from "node:fs/promises";


//import node file system modules(the callback version)
import fsc, { readFile } from "node:fs";

//Reading the file with promises API
fs.readFile('JS-PRACTICE(21-DEC-2023)/data.json', 'utf-8')
.then(data => {
    const dataObj = JSON.parse(data);
    console.log(dataObj);
    console.log("Complete");
   
})
.then(() => readFile("data.json"))
.then(data => console.log(data))
.catch(err =>{
    console.log("Could not complete...")
    throw err;
})


//creating a custom promise with callback api
const readFile = async (filename) => {
    return new Promise((res, rej) =>{
        fsc.readFile('data.json', 'utf-8', (err, data) =>{
            if(err){
                rej(err);
            }
            res(data);
        });
    });
}

