import * as readline from "node:readline/promises";
import {stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let geboorteJaar = parseInt(await userInput.question("In welk jaar ben je geboren? "))
let toekomstJaar = parseInt(await userInput.question("kies een toekomstig jaartal en dan vertel ik je hoe oud je zal zijn "))

console.log("in " + toekomstJaar + " zal je " + (toekomstJaar - geboorteJaar - 1) + " of " + (toekomstJaar - geboorteJaar) + " jaar oud zijn!")

process.exit()