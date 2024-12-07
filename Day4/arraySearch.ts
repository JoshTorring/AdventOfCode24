import * as fs from 'fs';
const os = require('os');
const data = fs.readFileSync('data.txt','utf8');

const lineArray = data.split(os.EOL)

const wordGrid: string[][] = lineArray.map(line => line.split(""))

const testGrid: string[][] = [
    ['X', 'M', 'A', 'S'],
    ['S', 'M', 'A', 'A'],
    ['S', 'M', 'A', 'X'],
    ['X', 'X', 'X', 'S'],
    ['S', 'A', 'M', 'X'],
]

//result should be 4

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
    for (let searchX = -1; searchX < 2; searchX++) {
        for (let searchY = -1; searchY < 2; searchY++) {
            if (
                !(searchX === 0 && searchY === 0) 
                && grid[0].length > (startX + searchX) 
                && (startX + searchX) >= 0
                && grid.length > (startY + searchY) 
                && (startY + searchY) >= 0
            ) {
                if (grid[startX + searchX][startY + searchY] == 'M') {
                    xmasCount += findXMAS(grid, startX, startY, startX + searchX, startY + searchY)
                }
            }
        }        
    }
    return xmasCount
}

const findXMAS = (grid: string[][], xX: number, xY: number, mX: number, mY: number): number => {
    if (
        grid[0].length > mX + (mX - xX)
        && mX + (mX - xX) >= 0
        && grid.length > mY + (mY - xY)
        && mX + (mY - xY) >= 0
    ) {
        if (grid[mX + (mX - xX)][mY + (mY - xY)] = "A") {
            if (grid[mX + ((mX - xX) * 2)][mY + ((mY - xY) * 2)] = "S") {
                return 1
            }
        }
    }
    return 0
}

console.log(findX(testGrid))
