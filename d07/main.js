import { readFile } from 'node:fs/promises'

let input = await readFile('./input.txt', 'utf-8')
// console.log(input)
input = input.split('\n')
input.pop()
// console.log(input[input.length-1])
// input = ['$ cd cgcqpjpn']
let path = '/root'
let dirs = {
  '/root': 0,
}
for (let line of input){
  // commands
  if (line[0] == '$'){
    // handle ls
    if (line.slice(2,4) === 'ls'){
      continue
    } else if (line.slice(2,4) === 'cd'){
      // handle moving back to root
      if (line.slice(5,6) === '/'){
        path = '/root'
        // handle moving to parent directory
      } else if (line.slice(5,7) == '..'){
        path = path.slice(0, path.lastIndexOf('/'))
        // handle entering subdirectory
      } else {
        let dirName = line.slice(5, line.length);
        path = path + '/' + dirName;
        dirs[path] = 0;
      }
    }
  } else if (line.startsWith('dir')){
    continue;
  } else if (/^\d+/.test(line)){
    let fileSize = +line.match(/^\d+/);
    // determine how many dirs back need to update their size
    let depth = path.match(/[/]/g).length;
    let temp = path;
    // update size and go one back
    for (let i = 0; i < depth; i++){
      dirs[temp] += fileSize;
      temp = temp.slice(0, temp.lastIndexOf('/'));
    }
  }
}
// console.log(dirs)
// console.log(Object.entries(dirs))
// log total size of dirs
let result1 = Object.entries(dirs).reduce((total, item) => {
  if (item[1] <= 100000){
    total += item[1];
  }
  return total;
}, 0);
// console.log(result1);

// Part Two
// determine missing space
let diskSize = 70000000;
let totalUsedSpace = dirs['/root'];
let availableSpace = diskSize - totalUsedSpace;
let requiredSpace = 30000000;
let missingSpace = requiredSpace - availableSpace;
console.log(missingSpace);
// filter too small folders
let adequateDirs = Object.fromEntries(Object.entries(dirs).filter(([key,value]) => value >= missingSpace));
console.log(adequateDirs);
// minimum-size folder's size
let minimumSize = Math.min(...Object.values(adequateDirs));
console.log(minimumSize);




