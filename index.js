#! /usr/bin/env node
import inquirer from "inquirer";
let answer = await inquirer.prompt([
    {
        message: "Enter First Number:",
        type: "number",
        name: "FirstNumber",
    },
    {
        message: "Enter Second Number:",
        type: "number",
        name: "SecondNumber",
    },
    {
        message: "Select operator to perfom operation:",
        type: "list",
        name: "operator",
        choices: ["Addition", "Substraction", "Multiplication", "Division"],
    },
]);
if (answer.operator === "Addition") {
    console.log(answer.FirstNumber + answer.SecondNumber);
    console.log("Author: Engineer Mudasir Ali Laghari");
}
else if (answer.operator === "Substraction") {
    console.log(answer.FirstNumber - answer.SecondNumber);
    console.log("Author: Engineer Mudasir Ali Laghari");
}
else if (answer.operator === "Multiplication") {
    console.log(answer.FirstNumber * answer.SecondNumber);
    console.log("Author: Engineer Mudasir Ali Laghari");
}
else if (answer.operator === "Division") {
    console.log(answer.FirstNumber / answer.SecondNumber);
    console.log("Author: Engineer Mudasir Ali Laghari");
}
else {
    console.log("Invalid number! Please Enter valid number.");
}
