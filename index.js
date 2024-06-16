#! /usr/bin/env node
import inquirer from "inquirer";
let AccountBalance = 10000;
let customer = await inquirer.prompt([
    {
        name: "firstName",
        message: "Enter Your firstName = ",
        type: "input",
    },
    {
        name: "LastName",
        message: "Enter Your LastName = ",
        type: "input",
    },
    {
        name: "Gender",
        message: "Enter Your Gender = ",
        type: "list",
        choices: ["Male", "Female"]
    },
    {
        name: "Age",
        message: "Enter Your Age = ",
        type: "number",
    },
    {
        name: "Number",
        message: "Enter Your Contact Number =  ",
        type: "number",
    },
]);
let actions = await inquirer.prompt([
    {
        name: "customer",
        message: "What do you wanna do ?",
        type: "list",
        choices: ["Debit money", "credit money"]
    },
    {
        name: "Debit",
        type: "number",
        message: "Enter the amount = "
    }
]);
class Customer {
    firstname;
    lastname;
    gender;
    age;
    number;
    constructor(FirstName, LastName, Gender, Age, ContactNum) {
        this.firstname = FirstName;
        this.lastname = LastName;
        this.gender = Gender;
        this.age = Age;
        this.number = ContactNum;
    }
    Debit(debitAmount) {
        if (AccountBalance < debitAmount) {
            console.log(`Transaction Cancelled \n Insufficient Balance`);
        }
        else {
            console.log(`Transaction Completed \n Remaining Balance = ${AccountBalance - debitAmount}`);
        }
    }
    Credit(creditAmount) {
        if (creditAmount > 100) {
            console.log("Transaction Completed");
            console.log(`*NOTE = 1$ will be deducted if 100$ are credited to the account. \n Remaining Balance = ${(AccountBalance + creditAmount) - 1}`);
        }
        else {
            console.log("Transaction Completed");
            console.log(`Account Balance = ${AccountBalance + creditAmount}`);
        }
    }
}
let a = new Customer(customer.firstName, customer.LastName, customer.Gender, customer.Age, customer.Number);
if (actions.customer === "Debit money") {
    a.Debit(actions.Debit);
}
else {
    a.Credit(actions.Debit);
}
console.log(a);
