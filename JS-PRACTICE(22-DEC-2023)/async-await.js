import fs from "node:fs/promises";

async function loadDate(){
    try{
        const data = await fs.readFile('data.json', 'utf-8');
        console.log("File read 1");
        await fs.readFile('data.json', 'utf-8');
        console.log("file read 2");
        const dataObj = JSON.parse(data);
        console.log(dataObj);
        console.log("Complete...");

    }
    catch(err) {
        console.log("could not load and parse file..");
        throw err;
    }

}
loadDate().then(() => console.log("Promise completed..."))