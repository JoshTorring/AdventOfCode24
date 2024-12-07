import * as fs from 'fs';
const data = fs.readFileSync('data.txt','utf8');
const dataarray = data.split(/[\r\n]+/)
const reportArray: Array<Array<number | string>> = []
dataarray.forEach((array, i) => {
    reportArray.push(array.split(' '))
    reportArray[i].forEach((level, j) => {
        reportArray[i][j] = parseInt(level as string)
    });
});

const testData = [
    [1, 2, 3, 5, 6, 9],                 //safe                  safe
    [2, 6, 7, 8, 9, 11],                //unsafe (4)            safe
    [9, 7, 4, 3, 1],                    //safe                  safe
    [11, 14, 15, 17, 14, 17],           //unsafe (reverses)     unsafe
    [13, 14, 15, 15, 16, 17, 18],       //unsafe (diff of 0)    safe
    [2, 2, 4, 6, 7],                    //unsafe                safe
    [2, 1, 3, 4, 5],                    //unsafe                safe
    [6, 7, 5, 4, 3],                    //unsafe                safe
    [1, 6, 7, 8, 9],                    //unsafe                safe
    [16, 17, 20, 23, 26, 29],           //safe                  safe
    [1, 6, 6, 6, 10, 15],               //unsafe                unsafe
    [16, 17, 19, 18, 20, 23]            //unsafe                safe
    //total                             3                       10
]

// let safeTotal = 0

// testData.forEach(report => {
//     let prevLevel: number = 0
//     let nextLevel: number = 0
//     let isSafe: boolean = true
//     let posOrNeg: number = 0
//     report.forEach((level, i) => {
//         prevLevel = nextLevel
//         nextLevel = level as number
//         if (i !== 0) {
//             if (i === 1) {
//                 if (nextLevel - prevLevel > 0)
//                 posOrNeg = 1
//                 if (nextLevel - prevLevel < 0) 
//                 posOrNeg = -1
//             }
//             if (nextLevel - prevLevel === 0) 
//                 isSafe = false
//             if (nextLevel - prevLevel > 3 || nextLevel - prevLevel < -3)
//                 isSafe = false
//             if (nextLevel - prevLevel > 0 && posOrNeg === -1)
//                 isSafe = false
//             if (nextLevel - prevLevel < 0 && posOrNeg === 1)
//                 isSafe = false
//         }
//     });
//     if (isSafe === true) {
//         safeTotal++
//     } else {
//         //only unsafe reports make it here
//         //reset to safe
//         isSafe = true
//         let isReallySafe = false
//         //a loop for each level in the unsafe report
//         report.forEach((irrelevent, k) => {
//             //create a clone of the original report
//             const tempReport = structuredClone(report)
//             //cuts out the level of the current loop
//             tempReport.splice(k, 1)
//             console.log(tempReport)
//             //reset the required determiners
//             let prevLevel: number = 0
//             let nextLevel: number = 0 
//             let posOrNeg: number = 0  
//             //loop through the cloned and spliced report
//             tempReport.forEach(splicedlevel => {
//                 prevLevel = nextLevel
//                 nextLevel = splicedlevel as number
//                 if (k !== 0) {
//                     if (k === 1) {
//                         if (nextLevel - prevLevel > 0)
//                         posOrNeg = 1
//                         if (nextLevel - prevLevel < 0) 
//                         posOrNeg = -1
//                     }
//                     if (nextLevel - prevLevel === 0) 
//                         isSafe = false
//                     if (nextLevel - prevLevel > 3 || nextLevel - prevLevel < -3)
//                         isSafe = false
//                     if (nextLevel - prevLevel > 0 && posOrNeg === -1)
//                         isSafe = false
//                     if (nextLevel - prevLevel < 0 && posOrNeg === 1)
//                         isSafe = false
//                 }
//                 if (isSafe === true)
//                     isReallySafe = true
//             });
//         });
//         console.log(isSafe)
//         console.log("-------------------")
//         if (isSafe === true)
//             safeTotal++
//     }
// });

// console.log("The safe total is:", safeTotal)




const determineIfSafe = (report: Array<number | string>): boolean => {
    let isSafe = true
    let prevLevel: number = 0
    let nextLevel: number = 0 
    let posOrNeg: number = 0 
    report.forEach((level: number | string, i: number) => {
        prevLevel = nextLevel
        nextLevel = level as number
        if (i !== 0) {
            if (i === 1) {
                if (nextLevel - prevLevel > 0)
                posOrNeg = 1
                if (nextLevel - prevLevel < 0) 
                posOrNeg = -1
            }
            if (nextLevel - prevLevel === 0) 
                isSafe = false
            if (nextLevel - prevLevel > 3 || nextLevel - prevLevel < -3)
                isSafe = false
            if (nextLevel - prevLevel > 0 && posOrNeg === -1)
                isSafe = false
            if (nextLevel - prevLevel < 0 && posOrNeg === 1)
                isSafe = false
        }
    });
    console.log(report)
    console.log(isSafe)
    console.log("------------------")
    return isSafe
}

const adjustAndRetest = (report: Array<number | string>):boolean => {
    let isSafe:boolean = false
    report.forEach((level, k) => {
        const tempReport = structuredClone(report)
        tempReport.splice(k, 1)
        let adjustedReportIsSafe: boolean = false
        adjustedReportIsSafe = determineIfSafe(tempReport)
        
        if (adjustedReportIsSafe)
            isSafe = true
    })
    return isSafe
}


let madeSafeTotal: number = 0
let safeTotal: number = 0

reportArray.forEach(report => {
    const isSafe: boolean = determineIfSafe(report)
    if (isSafe)
        madeSafeTotal++
    else {
        const isMadeSafe: boolean = adjustAndRetest(report)
        if (isMadeSafe) {
            madeSafeTotal++
        }
    }
})

reportArray.forEach(report => {
    const isSafe: boolean = determineIfSafe(report)
    if (isSafe)
        safeTotal++
});

console.log("The safe total is:", safeTotal)
console.log("The made safe total is:", madeSafeTotal)
