function evenArry(arr){
    let even=[]
   for (let i = 0 ;i < arr.length;i++) {
       if(arr[i] % 2 === 0){
        even.push(arr[i]);
       } 
   
   }
   return even;    
    }
let arr=[2,4,6,7,5]
console.log(evenArry(arr));