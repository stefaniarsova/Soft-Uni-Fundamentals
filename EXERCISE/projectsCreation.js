function projectsCreation(input){
let architectName = input[0];
let numberProjects = Number(input[1]);
let hoursNeeded = numberProjects* 3

console.log(`The architect ${architectName} will need ${hoursNeeded} hours to complete ${numberProjects} project/s.`)
}
projectsCreation(["George ","4 "])