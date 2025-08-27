import * as fs from "fs";
import { forEachChild } from "typescript";
const os = require("os");
const rawRules: string = fs.readFileSync("dataRules.txt", "utf8");
const rawManuals: string = fs.readFileSync("dataUpdates.txt", "utf-8");

const readAndParseData = (
  rawRules: string,
  rawManuals: string
): { rules: number[][]; manuals: number[][] } => {
  const ruleArray: string[] = rawRules.split(os.EOL);
  const rulesString: string[][] = ruleArray.map((line) => line.split("|"));
  const rules: number[][] = rulesString.map((rule) => rule.map((pagenumber) => parseInt(pagenumber)))

  const manualsArray: string[] = rawManuals.split(os.EOL);
  const manualsString: string[][] = manualsArray.map((line) => line.split(","))
  const manuals: number[][] = manualsString.map((manual) => manual.map((pagenumber) => parseInt(pagenumber)))

  return { rules, manuals };
};

const {rules, manuals} = readAndParseData(rawRules, rawManuals);

console.log(rules);
//console.log(manuals);


manuals.forEach((manual:number[], i:number) => {
  let isValied: boolean = true
  manual.forEach((pagenumber:number) => {
    const matchingRules:number[][] = rules.map((rule, index) => )
  });
});
