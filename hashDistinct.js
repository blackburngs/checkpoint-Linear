let hash1 = {
    '2': 0,
    '4': 1,
    '5': 2,
    '6': 3,
    '7': 4,
  };
  
  let arr1 = [7, 2, 5, 1, 8]
  
  let totalHash1 = 0;
  
  for(let i = 0; i < arr1.length ; i++){
    
    if(!(hash1[arr1[i].toString()] !== undefined)){
      totalHash1 += arr1[i]
    };
    
  }
    
  let hash2 = {
    '7': 0,
    '2': 1,
    '5': 2,
    '1': 3,
    '8': 4,
  };
  let arr2 = [2, 4, 5, 6, 7]
  
  let totalHash2 = 0;
  
  for(let i = 0; i < arr2.length ; i++){
    
    if(!(hash2[arr2[i].toString()] !== undefined)){
      totalHash2 += arr2[i]
    };
  }
  
  const totalHash = totalHash1 + totalHash2
  console.log(totalHash)