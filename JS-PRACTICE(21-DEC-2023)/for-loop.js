const  names = ["Abc", "xyz", "tuv"]

//for loop
for(let i=0; i<names.length; i++){
    console.log(`Names: ${names[i]}`);
}

//for...of loop
for(let name of names){
    console.log(`Names: ${name}`);

}

//array of objects
import employees from './data.json' assert {type: 'json'}

const employee = employees[0];

for(let detail in employee){
    console.log(`${detail} : ${employee[detail]}`);
}

//bringing both approaches together
for(let emp of employees){
    for(let detail in emp){
        console.log(`${detail} : ${emp[detail]}`)
    }
    console.log(`---`);
}
