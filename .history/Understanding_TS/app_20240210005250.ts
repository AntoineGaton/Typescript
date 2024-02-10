function combined(
   num1 : number | string, num2 : number | string){
   if (typeof num1 === 'number' && typeof num2 === 'number'){
      return num1 + num2;
   }
   else if (typeof num1 === 'string' && typeof num2 === 'string'){
      return num1.toString() + num2.toString();
   }
   else{
      console.log('Invalid input');
   }
}

const combinedAges = combined(30, 26);
console.log(combinedAges);

const combinedNames = combined('Antoine', 'Bianca');

console.log(combinedNames);