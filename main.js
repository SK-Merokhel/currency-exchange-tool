#!/usr/bin/env node
// Importing the inquirer package for user interaction
import inquirer from "inquirer";
// Currency conversion rates
const currency = {
    USDT: 1,
    EUR: 0.94,
    GBP: 0.80,
    INR: 83.64,
    PKR: 278.03,
};
// Prompting the user to select the currencies and enter the amount
// The user is prompted to select the currency they want to convert from, the currency they want to convert to, and the amount they want to convert.
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter From Currency",
        type: "list",
        choices: ["USDT", "EUR", "GBP", "INR", "PKR"],
    },
    {
        name: "to",
        message: "Enter To Currency",
        type: "list",
        choices: ["USDT", "EUR", "GBP", "INR", "PKR"],
    },
    {
        name: "amount",
        message: "Enter Your Amount",
        type: "number", // User inputs a numerical amount
    },
]);
// Extracting conversion rates and amount from user input
let fromAmount = currency[user_answer.from]; // Conversion rate for the currency user wants to convert from
let toAmount = currency[user_answer.to]; // Conversion rate for the currency user wants to convert to
let amount = user_answer.amount; // Amount user wants to convert
// Calculating the converted amount
let baseAmount = amount / fromAmount; // Converting the amount to the base currency (USDT)
let convertedAmount = baseAmount * toAmount; // Converting the amount from the base currency to the desired currency
// Displaying the converted amount
console.log(convertedAmount); // Output the converted amount
