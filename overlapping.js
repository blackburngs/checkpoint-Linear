let arr1 = [2, 4, 5, 6, 7];
let arr2 = [7, 2, 5, 1, 8];
let total = 0;

  
for(let i = 0; i < arr1.length; i++){
  for(let j=0; j < arr2.length; j++){
    if(arr1[i] == arr2[j]){
      total += arr1[i] + arr2[j];
    }
  }
}

console.log(total) 