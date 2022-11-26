function printAndSum (startNum , endNum) {
let sum = 0;
let printline = ""

for (let i = startNum ; i <= endNum; i++){
    sum += i;
    printline += i + " ";
}
console.log(printline);
console.log(`Sum: ${sum}`)
}

printAndSum(50, 60)