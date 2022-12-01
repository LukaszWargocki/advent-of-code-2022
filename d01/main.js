// attempt to load input directly from website
//const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
// require("dotenv").config({ path: "./config/.env" })
// console.log(process.env.cookie)
// async function getInput(){
//   let data = await fetch("https://adventofcode.com/2022/day/1/input", {
//     method: "post", headers: { "Cookie": process.env.cookie }
//   })
//   data = await data.text()
//   console.log(data)
//   return data
// }
// input = getInput()

// Part one
import * as fs from 'node:fs/promises'
let input = await fs.readFile('./input.txt', 'utf-8')
let elfs = input.split('\n\n')
let elfsAsCalories = elfs.map(elf => elf.split('\n').reduce((calories, meal)=> calories + +meal, 0))
//let maxCalories = Math.max(...elfsAsCalories)
// Part two
elfsAsCalories.sort((a,b)=>b-a)
let sumOfTopThree = elfsAsCalories[0] + elfsAsCalories[1] + elfsAsCalories[2]
console.log(sumOfTopThree)