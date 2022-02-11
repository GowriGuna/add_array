const arr=[4,1]
function add(arr){
let sum = arr[arr.length-1]
// console.log(arr.length);
for(let i=arr[arr.length-1];i<arr[0];i++){
    sum = sum + (i+1);
    // console.log(sum);
}
console.log("sum := ",sum);
}
add(arr)