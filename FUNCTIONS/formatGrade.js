function formatGrade(grade) {
let formatted = grade.toFixed(2);
let gradeInWords = ''

if(grade < 3){
formatted = '2';
gradeInWords = 'Fail'
}else if(grade < 3.50){
gradeInWords = 'Poor'
}else if(grade < 4.50){
gradeInWords = 'Good'
}else if(grade < 5.50){
gradeInWords = 'Very good'
}else if (grade >= 5.50){
gradeInWords = 'Excellent'
}
console.log(`${gradeInWords} (${formatted})`);
}
formatGrade(2.99)