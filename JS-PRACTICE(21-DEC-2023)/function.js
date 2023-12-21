import employees from './data.json' assert {type: 'json'}

import createPrompt from 'prompt-sync'
let prompt = createPrompt();

const logEmployee = (employee) => {
    Object.entries(employee).forEach(entry => {
        console.log(`${entry[0]}: ${entry[1]}`);
        
    });
}

function getInput(propmtText, validator, transformer){
    let value = prompt(propmtText);
    if(validator && !validator(value)){
        console.error(`Invalid value...`)
        //process.exit(1);
        //it is recurssion example
        return getInput(propmtText, validator, transformer);
    }
    if(transformer){
        return transformer(value);
    }
    return value;
}


//validator functions
const isStringInputValid = function(input){
    return (input) ? true : false;
}

const isBooleanInputValid = function (input){
    return (input === "yes" || input === "No");
}

// const isStartYearValid = function (input){
//     let numValue = Number(input);
//     if(!Number.isInteger(numValue) || numValue < 1990 || numValue > 2023){
//     return false;
//     }
//     return true;

// }
// const isStartMonthValid = function (input){
//     let numValue = Number(input);
//     if(!Number.isInteger(numValue) || numValue < 1 || numValue > 12){
//     return false;
//     }
//     return true;
// }
// const isStartDayValid = function (input){
//     let numValue = Number(input);
//     if(!Number.isInteger(numValue) || numValue < 1 || numValue > 31){
//     return false;
//     }
//     return true;

// }

//using higher-order function
const isIntegerValid = (min, max) => {
    return(input) => {
        let numValue = Number(input);
        if(!Number.isInteger(numValue) || numValue < min || numValue > max){
            return false;
        }
        return true;
    }

}


//Application commands
function listEmployees(){
    console.log(`Employee List----------------`);
        console.log('');
       employees.forEach(e => {
        logEmployee(e);
        prompt("press enter to continue...");
       });
        console.log(`Employee list completed.....`)
}

function addEmployee(){
    console.log(`Adding------------`);
    console.log('');

    let employee = {}
    employee.firstname = getInput("First Name:", isStringInputValid);
    employee.lastname = getInput("Last Name:", isStringInputValid);
   let startDateYear = getInput("Employee start year:", isIntegerValid(1990,2023));
   let startDateMonth = getInput("Employee start month:", isIntegerValid(1,12));
    let startDateDay= getInput("Employee start Day:", isIntegerValid(1, 31));
    employee.startDate = new Date(startDateYear, startDateMonth - 1, startDateDay);
    employee.isActive = getInput("Is Employee active (Yes or No):", isBooleanInputValid, i => (i === "yes"));

    

    const json = JSON.stringify(employee, null, 2);
    console.log(`Employee: ${json}`);
}


//function search by id
function searchById(){
    const id = getInput("Employee ID:", null, Number);
    const result = employees.find(e => e.id === id);
    if(result){
        console.log("");
        logEmployee(result);
    }
    else{
        console.log("No result..")
    }
}


//function search by name
function searchByName(){
    const firstnamesearch = getInput("First Name:").toLowerCase();
    const lastnamesearch = getInput("Last Name:").toLowerCase();
    const results = employees.filter(e =>{
        if(firstnamesearch && !e.firstname.toLowerCase().includes(firstnamesearch)){
            return false;
        }
        if(firstnamesearch && !e.firstname.toLowerCase().includes(firstnamesearch)){
            return false;    
        }
        return true;
    });
    results.forEach((e, idx) =>{
        console.log("");
        console.log(`Search result ${idx + 1}------------------------`);
        logEmployee(e);


    });
}

//get the command the user wants to execute
const command = process.argv[2].toLowerCase();

switch (command) {
    case 'list':
        listEmployees();
        break;

    case 'add':
        addEmployee();
        break;

    case 'search-by-id':
        searchById();
        break;

    case 'search-by-name':
        searchByName();
        break;

    default:
        console.log(`Invalid.....`);
        process.exit(1);
}










