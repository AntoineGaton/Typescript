function combined(num1 : number | string, num2 : number | string){
   const result = num1 + num2;
   return result;
}

const combinedAges = combined(30, 26);
console.log(combinedAges);

const combinedNames = combined('Antoine', 'Bianca');

