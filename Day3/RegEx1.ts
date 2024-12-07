import * as fs from 'fs';
const data = fs.readFileSync('data.txt','utf8');
let regex = new RegExp("(mul)\([1-9][0-9]?[0-9]?,[1-9][0-9]?[0-9]?\)", "g")

const pattern = /(?<=\bmul\()([1-9][0-9]?[0-9]?,[1-9][0-9]?[0-9]?)(?=\))/g

const validFns: number[][] = []
let match;
while ((match = pattern.exec(data)) != null) {
    validFns.push(match[0].split(',').map((stringNumber, i) => parseInt(stringNumber)))
}
console.log(validFns)

const initialValue: number = 0

const testNumbers: number[][] = [[2, 4], [4, 5], [10, 6]]

const result: number = validFns.reduce((total, value) => total + (value[0] * value[1]), initialValue);

console.log("The combined result is:",result)
