import * as fs from 'node:fs/promises'

let input = await fs.readFile('./input.txt', 'utf-8')

// Part One
// console.log(input)
let pairs = input.split('\n')
pairs.pop()
// console.log(pairs)
let pairs2D = pairs.map(pair => pair.split(','))
// console.log(pairs2D)
let pairs3D = pairs2D.map(pair => [pair[0].split('-'), pair[1].split('-')])
// console.log(pairs3D)
let count = pairs3D.reduce((count, pair)=>{
  if ((+pair[0][0] >= +pair[1][0] && +pair[0][1] <= +pair[1][1]) 
    || (+pair[0][0] <= +pair[1][0] &&  +pair[0][1] >= +pair[1][1])) { count++ }
  return count
}, 0)
// console.log(count) // 459

// Part Two
//    2-4, 4-6 || 2-4, 1-5 || 3-9, 5-6 || 7-9 || 1-7 || 2-4, 1-2 
let count2 = pairs3D.reduce((acc, pair)=>{
  if ((+pair[0][0] < +pair[1][0] && +pair[0][1] < +pair[1][0])
  || (+pair[1][0] < +pair[0][0] && +pair[1][1] < +pair[0][0])){ 
    acc-- 
  }
  return acc
}, pairs3D.length)
console.log(count2)