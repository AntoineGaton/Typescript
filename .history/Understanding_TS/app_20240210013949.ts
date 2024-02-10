function add(n1 : number, n2 : number) {
   return n1 + n2;
}

// void is a type that is used when a function does not return anything
// it is not necessary to use void as the return type of a function
function printResult(num : number) : void {
   console.log('Result: ' + num);
}

// you infer the type of a function by using the function keyword
let prints : Function;

// you can also explicitly define the type of a function
prints = printResult;

prints(add(5, 12));

// you can also define the type of a function using arrow functions
let combinedValues : (a : number, b : number) => number;