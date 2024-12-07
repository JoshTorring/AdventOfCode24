import * as fs from 'fs';
const data = fs.readFileSync('data.txt','utf8');
let regex = new RegExp("(mul)\([1-9][0-9]?[0-9]?,[1-9][0-9]?[0-9]?\)", "g")

const pattern = /((?<=\bmul\()([1-9][0-9]?[0-9]?,[1-9][0-9]?[0-9]?)(?=\)))|(do\(\))|(don't\(\))/g


const matchList: Array<number | string | number[]> = []
let match;
while ((match = pattern.exec(data)) != null) {
    if (match[0] !== "don't()" && match[0] !== "do()") {
        const parsedNumbers = match[0].split(',').map((stringNumber) => parseInt(stringNumber))
        matchList.push(parsedNumbers)
    } else {
        matchList.push(match[0])
    }
}
console.log(matchList)

let mulEnabled: boolean = true
let grandTotal: number = 0
const testNumbers: Array<number[]|string> = [[2, 4], "don't()", [4, 5], [10, 6], "do()", [5, 8], [4, 3], "do()", [7, 10], "don't()", [10, 10]]


matchList.forEach((item) => {
    if (item === "do()") {
        mulEnabled = true
    } else if (item === "don't()") {
        mulEnabled = false
    } else {
        const numberItem: number[] = item as number[]
        if (mulEnabled === true) {
            console.log(numberItem)
            console.log((numberItem[0] as number) * (numberItem[1] as number))
            grandTotal += (numberItem[0] as number) * (numberItem[1] as number)
        }
    }
})

console.log("The modified total is:", grandTotal)
// const initialValue: number = 0


// const result: number = validFns.reduce((total, value) => total + (value[0] * value[1]), initialValue);

// console.log("The combined result is:",result)
