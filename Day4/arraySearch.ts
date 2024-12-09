import * as fs from 'fs';
const os = require('os');
const data = fs.readFileSync('data.txt','utf8');

const lineArray = data.split(os.EOL)

const wordGrid: string[][] = lineArray.map(line => line.split(""))
console.log(wordGrid)

const testGrid: string[][] = [
    ['X', 'M', 'A', 'S', 'S', 'S', 'X'],
    ['S', 'M', 'A', 'A', 'A', 'S', 'M'],
    ['S', 'M', 'A', 'X', 'M', 'M', 'A'],
    ['X', 'X', 'X', 'S', 'X', 'M', 'X'],
    ['S', 'A', 'M', 'X', 'M', 'A', 'S']
]

let gridVisualiser: string[][] = [
    ['#', '#', '#', '#', '#', '#', '#'],
    ['#', '#', '#', '#', '#', '#', '#'],
    ['#', '#', '#', '#', '#', '#', '#'],
    ['#', '#', '#', '#', '#', '#', '#'],
    ['#', '#', '#', '#', '#', '#', '#']
]

//result should be 7?

const findX = (grid: string[][]) => {
    let finalXmasCount: number = 0
    grid.forEach((line, y) => {
        line.forEach((char, x) => {
            if (char === "X") {
                finalXmasCount += findAnM(grid, y, x)
            }
        });
    });
    return finalXmasCount
}

const findAnM = (grid: string[][], startY: number, startX: number): number => {
    let xmasCount: number = 0
    for (let searchY = -1; searchY < 2; searchY++) {
        for (let searchX = -1; searchX < 2; searchX++) {
            if (
                !(searchX === 0 && searchY === 0) 
                && grid[0].length > (startX + searchX) 
                && (startX + searchX) >= 0
                && grid.length > (startY + searchY) 
                && (startY + searchY) >= 0
            ) {
                if (grid[startY + searchY][startX + searchX] === 'M') {
                    // console.log(grid[startY][startX], startY, startX)
                    // console.log(grid[startY + searchY][startX + searchX], startY + searchY, startX + searchX)
                    xmasCount += findXMAS(grid, startX, startY, startX + searchX, startY + searchY)
                }
            }
        }        
    }
    return xmasCount
}

const findXMAS = (grid: string[][], xX: number, xY: number, mX: number, mY: number): number => {
    const aX = mX + (mX - xX)
    const aY = mY + (mY - xY)
    const sX = mX + ((mX - xX) * 2)
    const sY = mY + ((mY - xY) * 2)
    if (
        grid[0].length > aX
        && aX >= 0
        && grid.length > aY
        && aY >= 0
    ) {
        if (grid[aY][aX] === "A") {
            // console.log(grid[aY][aX], aY, aX)
            if (
                grid[0].length > sX
                && sX >= 0
                && grid.length > sY
                && sY >= 0
            ) {
                if (grid[sY][sX] === "S") {
                    // console.log(grid[sY][sX], sY, sX)
                    //markGridVisualiser(sX, sY, mX - xX, mY - xY)
                    return 1
                }
            }
        }
    }
    return 0
}

const markGridVisualiser = (sX: number, sY: number, xDiff: number, yDiff:number) => {
    const xmas: string[] = ['s', 'a', 'm', 'x']
    xmas.forEach((letter, i) => {
        gridVisualiser[sY - (yDiff * i)][sX - (xDiff * i)] = letter
    })
    // console.log(gridVisualiser)
}

console.log(findX(wordGrid))
