 //#1
 if ("browser" === "edge"){
    console.log( "You've got the Edge!" );
   }
   else if("browser" === " chrome"||"firefox"|| "safari"||"opera"){
     console.log( 'Okay we support these browsers too' );
   }
   else
   console.log( 'We hope that this page looks ok!' );
   
  //#2
 let a =+prompt("a?","");
 switch(a){
     case 0:
     console.log(0);
     break;  
      case 1:                                                      
     console.log(1);
     break;
     case 2:
     case 3:
     console.log('2,3');
     break;
       
  }   
 //functions
 function min(a,b){
    return a < b ? a :b; 
 }
 function pow(x,n){
    return n > 0 ?  x**n : console.log("please enter positive integer")
 }
 console.log(pow(2,-3));
 
 //programming
 //#1
 function computeSalesCommission(issalaried, salesAmt) {
 
    if (issalaried && salesAmt >= 300 && salesAmt <= 500) {
      return salesAmt * 0.01;
    } 
    else if (issalaried && salesAmt > 500) {
      return (500 * 0.01) + ((salesAmt - 500) * 0.02);
    }
     else if (!issalaried && salesAmt >= 300 && salesAmt <= 500) {
      return salesAmt * 0.02;
    } 
    else if (!issalaried &&  salesAmt> 500) {
      return (500 * 0.02) + ((salesAmt- 500) * 0.03);
    } 
    else {
      return 0;
    }
  }
   console.log("expect 0: ", computeSalesCommission(true, 200));
   console.log("expect 0: ", computeSalesCommission(false, 200)); 
   console.log("expect 3: ", computeSalesCommission(true, 300)); 
   console.log("expect 6: ", computeSalesCommission(false, 300)); 
   console.log("expect 65: ", computeSalesCommission(true, 3500));
   console.log("expect 100: ", computeSalesCommission(false, 3500));
 //  //#2
  
  function compoundInterest(initialAmount, annualInterestRate, numberOfYearsToCpd) {
    let monthlyInterestRate = annualInterestRate / 12 / 100; 
    let totalMonths =  numberOfYearsToCpd * 12; 
  
    let balance = initialAmount;
  
    for (let month = 0; month < totalMonths; month++) {
      balance += balance * monthlyInterestRate; 
    }
  
    return Math.floor(balance); 
  }
  
 //  //#3
    function calcDownpayment(cost) {
       if (cost < 50000) {
       return cost * 0.05;
       } 
       else if (cost < 100000) {
       return 2500 + 0.10 * (cost - 50000);
       }
        else if (cost < 200000) {
       return 7500 + 0.15 * (cost - 100000);
       } 
       else {
       return 20000 + 0.10 * (cost - 200000);
       }
    }
    console.log("expect 2000: ", calcDownpayment(40000)); 
    console.log("expect 2500: ", calcDownpayment(50000));
    console.log("expect 7500: ", calcDownpayment(100000)); 
    console.log("expect 25000: ", calcDownpayment(250000));
 
    //#4
     function sumDigits(digit){
       let sum=0;
       while(digit>0){
       let lastDigit = digit % 10
          sum += lastDigit;
         digit = Math.floor(digit /10 );
 
       }
     
     return sum;
    }
     console.log(sumDigits(1234)); 
     console.log(sumDigits(102))
     console.log(sumDigits(8))
    
     function productDigits(digit){
       let pro = 1;
       while (digit > 0) {
       let lastDigit = digit % 10
          pro *= lastDigit;
         digit = Math.floor(digit /10) ;
 
       }
     
     return pro;
    }
 
    console.log(productDigits(1234)); 
     console.log(productDigits(102))
     console.log(productDigits(8))
 
     //#5
     function convertFahrenheit(fahrenheit) {
       let celsius = (fahrenheit - 32) * 5/9;
       return celsius;
   }
   console.log("expect 0: ", convertFahrenheit (32)); 
   console.log("expect -17.7778: ", convertFahrenheit (0)); 
   console.log("expect 100: ", convertFahrenheit (212));
 
   //#6
 
   function calcDistance(x1, y1, x2, y2) {
    let distance = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2);
    return Math.round(distance * 100) / 100;
 }
 console.log("expect 7.07 : ", calcDistance (0, 0, 5, 5));