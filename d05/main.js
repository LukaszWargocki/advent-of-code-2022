import * as fs from 'node:fs/promises'
// Playing around with realines section
// import * as readline from 'node:readline/promises'
// import * as events from 'node:events'

// let filehandle = await fs.open('./input.txt', 'r')
// const fileStream = filehandle.createReadStream('utf-8')
// let rl = readline.createInterface({
//   input: fileStream,
//   crlfDelay: Infinity
// })
// rl.on('line', line =>{
//   console.log(line)
// })
// try {
//   await events.once(rl, 'close')
// } catch(err){
//   console.log(err)
// }

// Part One
let input = await fs.readFile('./input.txt', 'utf-8')
input = input.split('\n')
input.pop()
// console.log(input)
let structureEnd = input.indexOf('')
let moves = input.slice(structureEnd+1)
let structure = input.slice(0, structureEnd)
// console.log(structure)
// console.log(moves)
let maxStackHeight = structure.length - 2
let stacks = []
// loop through layers from the bottom
for (let i = maxStackHeight; i >= 0; i--){
  // go left to rigt
  for (let j = 0; j < 9; j++){
    // if there is none make an array for the stack
    if (!stacks[j]) stacks[j] = []
    // read name of the box
    let box = structure[i].charAt(1+j*4)
    // if it's not empty space push it onto a stack
    if (box && box != ' ') stacks[j].push(box)
  }
}
// deep copy crate stacks for part two
let stacks2 = JSON.parse(JSON.stringify(stacks))
// convert moves into array of [amount, from, to] numbers array
moves = moves.map(line => {
  let [amount, from, to] = line.match(/\d+/g)
  // console.log(amount, from, to)
  return [+amount, +from, +to]
})
// perform moves one line at a time
moves.forEach(line => {
  // perform moves
  for (let i = 0; i < line[0]; i++){
    let crate = stacks[line[1]-1].pop()
    stacks[line[2]-1].push(crate)
  }
})
// console.log(stacks)
// print out the top crates
let top = []
stacks.forEach(stack => top.push(stack[stack.length-1]))
top = top.join('')
// console.log(top) // RLFNRTNFB
// moves = moves.slice(0,1)

// Part Two
moves.forEach(line => {
  // console.log(line)
  let load = stacks2[line[1]-1].splice(-line[0], line[0])
  // console.log(load)
  // console.log(`4 after: ${stacks2[line[1]-1]}`)
  stacks2[line[2]-1] = stacks2[line[2]-1].concat(load)
  // console.log(`5 after: ${stacks2[line[2]-1]}`)
})
// console.log(stacks2)
let top2 = []
stacks2.forEach(stack => top2.push(stack[stack.length-1]))
top2 = top2.join('')
console.log(top2) // MHQTLJRLB