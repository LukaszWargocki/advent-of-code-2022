import * as fs from 'node:fs/promises'
let input = await fs.readFile('./input.txt', 'utf-8')
// Part One
// console.log(input)
let sacks = input.split('\n')
sacks.pop()
// console.log(sacks)
// console.log(endfile)
// divide each item into two halves
let sacks2D = sacks.map(item => [new Set(item.slice(0, item.length/2)), new Set(item.slice(item.length/2))])
// console.log(sacks2D)
// map each item into single shared element between halves
let sharedItems = sacks2D.map(item => [...item[0]].filter(x=>item[1].has(x))).flat()
console.log(sharedItems)
// calculate the score
let score = sharedItems.reduce((score, item) => {
  if (item === item.toLowerCase()) return score + item.charCodeAt() - 96
  return score + item.charCodeAt() - 38
  }, 0)
// console.log(`final: ${score}`)

// Part Two
// split the sacks into groups of three
 let groups = []
 for (let i = 0; i < sacks.length-2; i += 3) groups.push([new Set(sacks[i]),new Set(sacks[i+1]),new Set(sacks[i+2])])
//  console.log(groups)
//  console.log(groups.length)
// identify shared item between sacks within a group and make an array of those
let sharedItems3 = groups.map(item=> [...item[0]].filter(x=> item[1].has(x) && item[2].has(x))).flat()
// console.log(sharedItems3)
// console.log(sharedItems3.length)
//add up the item scores
let score3 = sharedItems3.reduce((score, item) => {
  if (item === item.toLowerCase()) return score + item.charCodeAt() - 96
  return score + item.charCodeAt() - 38
  }, 0)
console.log(score3)


