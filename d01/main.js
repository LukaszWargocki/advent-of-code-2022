import * as fs from 'node:fs/promises'
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

let fileHandle = await fs.open('./input.txt', 'r')


await fileHandle.close()