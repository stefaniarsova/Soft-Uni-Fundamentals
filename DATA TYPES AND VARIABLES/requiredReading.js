function requiredReading(pagesCurrentBook, pagesPerHour,daysRequired){
let requiredHoursPerDay = (pagesCurrentBook/pagesPerHour) / daysRequired;
console.log(requiredHoursPerDay)
}
requiredReading(212,20,2)