function vacationBookList (input){
let pagesInCurrentBook = Number(input[0]);
let pagesPerHour = Number(input[1]);
let daysNeeded = Number(input[2]);
let timeNeededForCurrentBook = pagesInCurrentBook / pagesPerHour;
let timeNeededPerDay = timeNeededForCurrentBook / daysNeeded;
console.log(timeNeededPerDay)
}
vacationBookList(["212 ","20 ","2 "])