type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function combined(
   num1 : Combinable, 
   num2 : Con,
   resultConversion : 'as-number' | 'as-text' 
   ){
   if (typeof num1 === 'number' && typeof num2 === 'number' || resultConversion === 'as-number'){
      return +num1 + +num2;
   }
   else if (typeof num1 === 'string' && typeof num2 === 'string' || resultConversion === 'as-text'){
      return num1.toString() + num2.toString();
   }
   else{
      console.log('Invalid input');
   }
}

const combinedAges = combined(35, 29, 'as-number');
console.log(combinedAges);

const combinedStringAges = combined('35', '29', 'as-number');
console.log(combinedStringAges);

const combinedNames = combined('Antoine', 'Bianca', 'as-text');
console.log(combinedNames);