let hash = {
  '2': 0,
  '4': 1,
  '5': 2,
  '6': 3,
  '7': 4,
};

let arr = [7, 2, 5, 1, 8]

let totalHash = 0;

for(let i = 0; i < arr.length ; i++){
  
  if(hash[arr[i].toString()] !== undefined){
    console.log(arr[i])
    totalHash += arr[i]
  };
  
}
totalHash = totalHash*2;

console.log(totalHash)