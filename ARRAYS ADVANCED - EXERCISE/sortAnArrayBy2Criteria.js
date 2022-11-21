function sortingBy2 (array) {
let secondaryCriteria = array.sort();
let primaryCriteria = secondaryCriteria.sort((a,b) => a.length-b.length);
console.log(primaryCriteria.join('\n'));
}
sortingBy2(['alpha', 'beta', 'gamma'])