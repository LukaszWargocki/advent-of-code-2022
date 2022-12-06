import * as fs from 'node:fs/promises'

let input = await fs.readFile('./input.txt', 'utf-8')
input = input.slice(0, -1) // get rid of last return
// console.log(input)
// console.log(input.at(-1))

// Part One
// declare score variable in outer scope
let marker
// start from 5th character
for (let i = 4; i < input.length; i++){
  // if string made of four previous character produces a 4-element set extract character's index and break
  if (new Set(input.slice(i-4, i)).size === 4){
    marker = i
    break
  }
}
console.log(`marker at: ${marker}`)

// Part Two
// same principle
let message
for (let i = 14; i < input.length; i++){
  if (new Set(input.slice(i-14, i)).size === 14){
    message = i
    break
  }
}
console.log(`message start: ${message}`)