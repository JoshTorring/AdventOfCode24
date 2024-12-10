import * as fs from 'fs';
const os = require('os');
const data = fs.readFileSync('dataRules.txt','utf8');

const ruleArray = data.split(os.EOL)

const dataRules: string[][] = ruleArray.map(line => line.split("|"))

console.log(dataRules)
