const fs = require('fs')
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

require("dotenv").config({ path: "./config/.env" })

async function getInput(){
  let data = await fetch("https://adventofcode.com/2022/day/1/input", {
    method: "post", headers: { "Cookie": process.env.cookie }
  })
  data = await data.text()
  console.log(data)
  return data
}
input = getInput()
