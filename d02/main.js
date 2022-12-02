import * as fs from 'node:fs/promises'
// Part One
let input = await fs.readFile('./input.txt', 'utf-8')
let rounds = input.split('\n')
rounds.pop()
let scores = {"A X": 4, "A Y": 8, "A Z": 3, "B X": 1, "B Y": 5, "B Z": 9, "C X": 7, "C Y": 2, "C Z": 6}
let finalScore = rounds.reduce((score, round)=> score + scores[round], 0)
//console.log(finalScore)

// Part Two
let scores2 = {"A X": 3, "A Y": 4, "A Z": 8, "B X": 1, "B Y": 5, "B Z": 9, "C X": 2, "C Y": 6, "C Z": 7}
let finalScore2 = rounds.reduce((score, round)=> score + scores2[round], 0)
console.log(finalScore2)

