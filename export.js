import chalk from "chalk";
import { logObject, numEmployeesLogged } from "./logging.js";

// console.log(`${chalk.blue.bold('First Name: ')} Komal`);
// console.log(`${chalk.green.bold('Last Name: ')} Sharma`);

const employee ={
    id: 0,
    email: "Ks@gmail.com",
    firstname:"Komal",
    lastname:"Sharma",
    salaryUSD: 246639,
    localCurrency:"PEN",
    dateofbirth: "1999-01-03",
    startdate: "2023-11-11",
    isActive: true
}

logObject(employee);
logObject(employee);
logObject(employee);
console.log(`${chalk.green.bold('Employees Logged : ')} ${chalk.gray.bold(numEmployeesLogged)}`);
