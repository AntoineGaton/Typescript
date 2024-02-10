function add(n1 : number, n2 : number) {
   return n1 + n2;
}

// void is a type that is used when a function does not return anything
// it is not necessary to use void as the return type of a function
function printResult(num : number) : void {
   console.log('Result: ' + num);
}

let print : 

printResult(add(5, 12));