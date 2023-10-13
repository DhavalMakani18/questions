//find duplicate number from an array

const arr = [1, 2, 3, 4, 5, 6, 4, 7, 8, 9, 10, 10, 6];
const duplicates = arr.filter((element, index) => arr.indexOf(element) !== index);
console.log(duplicates);