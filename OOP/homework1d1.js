
 //#1
import promptSync from "prompt-sync";
const prompt = promptSync();
let sales = prompt("enter your salary")
let commision;
if(sales<300){
    console.log(0);
}
else if (sales > 300 && sales < 500)
{
    commision=0.01*sales;
    console.log(commision);

}
else if(sales>500){
    commision=0.02*sales;
    console.log(commision);
}


else if (sales>300 && sales < 500)
{
    commision=0.02*sales;
    console.log(commision);
}
else if (sales>500){
    commision=0.03*sales;
    console.log(commision);
}

 //#2
let age= prompt("eneter age");
while(age<18){
    age++;
    console.log(age) 
}
//#3

let initialAmount = prompt("enter initial amount");
let annualInterestRate = prompt("enter annual interestrate");
let numOfYears = prompt("enter number of years to compound");
let monthlyInterestRate=annualInterestRate/12;
for(let i=0;i<numOfYears*12;i++){
   let monthly =initialAmount* monthlyInterestRate;
  initialAmount += monthly;
}
console.log(initialAmount);

 //#4
for (let i = 1; i <=5; i++) {
    let count = '';
    for (let j = 1; j <= 5; j++) {
     count += j;
    }
    console.log(count);
  }
//4.1
  for (let i = 1; i <= 5; i++) {
    let str = '';
    for (let j = 1; j <= i; j++) {
      str += i;
    }
    console.log(str);
  }
//4.2
  for (let i = 5; i >= 1; i--) {
    let str = '';
    for (let j = 1; j <= i; j++) {
     str += i;
    }
    console.log(str);
  }
  
//5
const costOfHouse = (prompt("Enter the cost of the house:"));
if (!Number(costOfHouse) || costOfHouse < 0) {
  console.log("Invalid. Please enter a positive number.");
} else {
  let downPayment;

  if (costOfHouse > 0 &&  costOfHouse < 50000) {
      downPayment = 0.05 * costOfHouse;
  } else if (costOfHouse >50000 && costOfHouse < 100000) {
      downPayment = 1000 + 0.10 * (costOfHouse - 50000);
  } else if (costOfHouse >100000 && costOfHouse < 200000) {
      downPayment = 2000 + 0.15 * (costOfHouse - 100000);
  } else {
      downPayment = 5000 + 0.10 * (costOfHouse - 200000);
  }

  console.log("The down payment is:" + downPayment);
}


//6
 let digit = prompt("enter integer number")
  let sum = 0;
   while(digit>0){
     sum += digit % 10;
     digit = Math.floor(digit/10);

   }
   console.log(" sum of digit is : " + sum);


 
