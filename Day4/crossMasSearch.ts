import * as fs from 'fs';
import { forEachChild } from 'typescript';
const os = require('os');
const data = fs.readFileSync('data.txt','utf8');

const lineArray = data.split(os.EOL)

const wordGrid: string[][] = lineArray.map(line => line.split(""))

const testGrid: string[][] = [
    ['X', 'M', 'S', 'S', 'S', 'S'],
    ['S', 'M', 'A', 'A', 'A', 'S'],
    ['M', 'M', 'M', 'M', 'M', 'M'],
    ['X', 'A', 'X', 'A', 'X', 'M'],
    ['S', 'S', 'S', 'S', 'S', 'S'],
    ['S', 'A', 'A', 'X', 'A', 'A'],
    ['S', 'M', 'S', 'M', 'S', 'M']
]

const gridInUse: string[][] = wordGrid

let gridVisualiser: string[][] = new Array(gridInUse.length - 1).fill(null).map(() => new Array(gridInUse[0].length).fill('.'));

//result should be 8

const findA = (grid: string[][]) => {
    let finalCrossCount: number = 0
    grid.forEach((line, y) => {
        line.forEach((char, x) => {
            if (char === "A") {
                if (y > 0 && y < grid.length - 1) {
                    if (x > 0 && x < grid[0].length - 1) {
                        finalCrossCount += findCross(grid, y, x)
                    } else {
                        console.log("the A was at an X edge. Coords:", y, x)
                    }
                } else {
                    console.log("the A was at a Y edge. Coords:", y, x)
                }
            }
        });
    });
    return finalCrossCount
}

const findCross = (grid: string[][], aY: number, aX: number): number => {
    const searchOffsets: number[][] = [
        [-1, -1],
        [-1, 1],
        [1, -1],
        [1, 1]
    ]

    const cornerLetters: string[] = searchOffsets.map((offset) => {
        return grid[aY + offset[0]][aX + offset[1]]
    })

    const offsetCoords: string[] = searchOffsets.map(offset => {
        return ((aY + offset[0]).toString() + ':' + (aX + offset[1]).toString() + ', ')
    });

    const cornerLetterString = cornerLetters.join("")
    console.log("Well placed A at:", aY.toString() + ':' + aX.toString())
    console.log(cornerLetters)
    console.log(cornerLetterString)

    if (cornerLetterString === 'MSMS' || cornerLetterString === 'SMSM' || cornerLetterString === 'MMSS' || cornerLetterString === 'SSMM') {
        console.log("The corner letters are in the correct configuration. X-MAS located.")
        xmasVisualiser(aY, aX, searchOffsets, cornerLetters)
        return 1
    }

    return 0
}

const xmasVisualiser = (aY: number, aX:number, searchOffsets:number[][], cornerLetters: string[]) => {
    gridVisualiser[aY][aX] = 'A'
    searchOffsets.forEach((offset, i) => {
        gridVisualiser[aY + searchOffsets[i][0]][aX + searchOffsets[i][1]] = cornerLetters[i]
    })
}

const writeGridToOutput = (grid: string[][]) => {
    fs.writeFile('output.txt', (grid.map(line => line.join('')).join('\n')), function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
      });
}

console.log(gridVisualiser)
console.log("X-MAS total:", findA(gridInUse))
console.log("wordGrid x length:", wordGrid[0].length)
console.log("wordGrid y length:", wordGrid.length)
writeGridToOutput(gridVisualiser)


