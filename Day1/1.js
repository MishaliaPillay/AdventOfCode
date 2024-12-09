const fs = require('fs');

// Read the file content
const data = fs.readFileSync('input.txt', 'utf8');

// Initialize arrays
const leftNumbers = [];
const rightNumbers = [];

// Process each line
data.split('\n').forEach(line => {
    if (line.trim()) { // Skip empty lines
        const [left, right] = line.split(/\s+/).map(Number);
        leftNumbers.push(left);
        rightNumbers.push(right);
    }
});

// Output the arrays
//console.log("Left numbers:", leftNumbers);
//console.log("Right numbers:", rightNumbers);

//part 1
// order both arrays 
leftNumbers.sort(function(a, b){return a - b});
rightNumbers.sort(function(c, d){return c - d});
/*
// loop through all the numbers in the left array and get absoulte value of smae index in right array
let totalDist= 0;
 for (i=0; i<leftNumbers.length; i++){
 let difference= leftNumbers[i] - rightNumbers[i]
// save the absolute value 
let absDifference= Math.abs(difference);
   totalDist += absDifference;

 } //console.log(totalDist)
 return totalDist;

*/
 //part 2 
let similarityScore=0

for(let i= 0; i<leftNumbers.length;i++)
{ for(let k=0; k<rightNumbers.length;k++){
    let counter =0;
    if (leftNumbers[i]===rightNumbers[k])
    {
       counter++;
       similarityScore+= leftNumbers[i] * counter;
    } 
}

} console.log("sim",similarityScore)
return similarityScore;





