//Print unique elements from array.

const arr = [1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 10, 10];
const uniqueArr = [...new Set(arr)];
console.log(uniqueArr);