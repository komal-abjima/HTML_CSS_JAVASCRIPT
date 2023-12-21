import employees from './data.json' assert {type: 'json'}


//while loop
let i = 0;
while(employees[i]){
    console.log(`Name: ${employees[i].firstname} ${employees[i].lastname}`);
    i++;
}

//do-while loop
i = 0;
do{
    console.log(`Name: ${employees[i].firstname} ${employees[i].lastname}`);
    i++;
}while(employees[i]);