let arr1 = [7, 2, 5, 1, 8];
let arr2 = [2, 4, 5, 6, 7];
let totalArr1 = 0;
let arr = arr1.concat(arr2);
let totalArr2 = 0;

for(let i = 0; i < arr1.length; i++){
  for(let j=0; j < arr2.length; j++){
    if(arr1[i] == arr2[j]){
      totalArr1 += arr1[i] + arr2[j];
    }
  }
}
  
for(let i = 0;i < arr.length; i++){
  totArr2 = totalArr2 + arr[i]
}

const totalArr = totalArr2 - totalArr1;

console.log(totalArr);