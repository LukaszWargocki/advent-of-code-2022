import { readFile } from 'fs/promises';
let input = await readFile('./input.txt', 'utf-8');
let lines = input.split('\n');
lines = lines.slice(0, lines.length-1);
// console.log(lines);
let count = lines.length * lines[0].length;
// console.log(count);
let trees = lines.map(line => line.split(''));
// console.log(trees);
// count = 0;
// trees = [
//   [3,0,3,7,3],
//   [2,5,5,1,2],
//   [6,5,3,3,2],
//   [3,3,5,4,9],
//   [3,5,3,9,0]
// ];
count = trees.length * trees[0].length;
for (let i = 0; i < trees.length; i++){
  // console.log(`row ${i}: ${trees[i]}`)
  for (let j = 0; j < trees[i].length; j++){
    // isolate current tree's column
    let column = trees.map(row => row[j])
    // console.log(`column ${j}: ${column}`)
    // console.log(`[${i}][${j}]: ${trees[i][j]}`)
    // assign current trees height to a value
    let current = trees[i][j];
    // console.log(trees[i].slice(0,j));
    // console.log(trees[i].slice(j+1));
    // console.log(column.slice(0,i))
    // console.log(`item: ${current}`)
    // console.log(column.slice(i+1))
    if (trees[i].slice(0,j).some(tree => tree >= current)
      && trees[i].slice(j+1).some(tree => tree >= current)
      && column.slice(0,i).some(tree => tree >= current)
      && column.slice(i+1).some(tree => tree >= current)){
        count--;
    }
  }
}
console.log(count);

// Part Two

let maxScenicness = 0;

for (let i = 0; i < trees.length; i++){
  for (let j = 0; j < trees[i].length; j++){
    let current = trees[i][j];
    let left = 0, right = 0, up = 0, down = 0;
    // look left
    for (let k = j-1; k > -1; k--){
      if (trees[i][k] < current) {
        left++;
      } else if (trees[i][k] === current) {
        left++;
        break;
      } else {
        break;
      }
    }
    // look right
    for (let k = j+1; k < trees[i].length; k++){
      if (trees[i][k] < current) {
        right++;
      } else if (trees[i][k] === current) {
        right++;
        break;
      } else {
        break;
      }
    }
    // look up
    for (let k = i-1; k > -1; k--){
      if (trees[k][j] < current) {
        up++;
      } else if (trees[k][j] === current) {
        up++;
        break;
      } else {
        break;
      }
    }
    // look down
    for (let k = i+1; k < trees.length; k++){
      if (trees[k][j] < current) {
        down++;
      } else if (trees[k][j] === current) {
        down++;
        break;
      } else {
        break;
      }
    }
    // console.log(`left: ${left}, right: ${right}, up: ${up}, down: ${down}`)
    // update maximum scenicness
    let currentScenicness = left * right * up * down 
    if (currentScenicness > maxScenicness) {maxScenicness = currentScenicness}
  }
}
console.log(maxScenicness)