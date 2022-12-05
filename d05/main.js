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
// console.log(stacks)
// convert moves into array of [amount, from, to] numbers array
moves = moves.map(line => {
  let [amount, from, to] = line.match(/\d+/g)
  // console.log(amount, from, to)
  return [+amount, +from, +to]
})
// moves = moves.slice(0,1)
// console.log(moves)
// perform moves one line at a time
// console.log(stacks)
moves.forEach(line => {
  // console.log(line)
  for (let i = 0; i < line[0]; i++){
    let crate = stacks[line[1]-1].pop()
    // console.log(crate)
    stacks[line[2]-1].push(crate)
  }
})
// console.log(stacks)
// print out the top crates
let top = []
stacks.forEach(stack => top.push(stack[stack.length-1]))
top = top.join('')
console.log(top)
