//Print laggest kth element from the array

const arr = [ 1 ,6 ,7 ,12 ,5 ,4];

//for sort in ascending order
arr.sort((a,b)=>(a-b));
let highest = arr[arr.length-1];
//because it start with 0 to n-1.
console.log(highest);