import * as readline from "node:readline/promises";
import {stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let dagen = parseFloat(await userInput.question("Hoeveel dagen wil je omzetten naar seconden? "))
let uren = parseFloat(await userInput.question("Hoeveel uren wil je omzetten naar seconden? "))
let minuten = parseFloat(await userInput.question("Hoeveel minuten wil je omzetten naar seconden? "))
let seconden = parseFloat(await userInput.question("Hoeveel seconden wil je erbij optellen? "))

console.log("De tijd in seconden is " + ((dagen * 86400) + (uren * 3600) + (minuten * 60) + seconden))

process.exit()