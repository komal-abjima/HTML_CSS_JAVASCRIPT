import createPrompt from  'prompt-sync'
let prompt = createPrompt();

let employee = {}

let fn = prompt("Enter your first name: ");
if(!fn){
    console.error(`Invalid first name..`)
    process.exit(1);
}

employee.firstname = fn;


let ln = prompt("Enter your last name: ");
if(!fn){
    console.error(`Invalid first name..`)
    process.exit(1);
}

employee.lastname = ln;


let startDateYear = prompt("Employee start date year (2000-2023):");
startDateYear = Number(startDateYear);

if(!Number.isInteger(startDateYear)){
    console.error(`Invalid year..`)
    process.exit(1);
}

//check year
if(startDateYear < 2000 || startDateYear > 2023){
    console.error(`Enter in range..`);
    process.exit(1);
}

let startDateMonth = prompt("Employee start date month(1-12):");
startDateMonth = Number(startDateMonth);

if(!Number(startDateMonth)){
    console.error(`Invalid month..`);
    process.exit(1);
}

//check month
if(startDateMonth < 1 || startDateMonth > 12){
    console.error(`Enter in range..`);
    process.exit(1);
}

let startDateDay = prompt("Employee start date day (1-31):");
startDateDay = Number(startDateDay);

if(!startDateDay){
    console.error(`Invalid Day..`);
    process.exit(1);
}


//check date
if(startDateDay < 1 || startDateDay > 31){
    console.error(`Enter in range..`);
    process.exit(1);
}

//add date
 employee.startDate = new Date(startDateYear, startDateMonth - 1, startDateDay);

let isActive = prompt("Is employee active (Y or N):");
if(isActive !== "Y" && isActive !== "N"){
    console.error(`Enter Y or N..`);
    process.exit(1);

}
employee.isActive = (isActive === "Y");

const json = JSON.stringify(employee, null, 2);
console.log(`Employee: ${json}`);








