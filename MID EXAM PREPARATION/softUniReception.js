function softUniReception(input){
let e1 = Number(input[0]);
let e2 = Number(input[1]);
let e3 = Number(input[2]);
let efficiency = e1+e2+e3;
let remainingStudents = input[3];
let hours = 0;

while(remainingStudents > 0){
hours ++
if(hours % 4 != 0){
    remainingStudents -= efficiency;
}
}

console.log(`Time needed: ${hours}h.`);
}
softUniReception(['1','2','3','45'])