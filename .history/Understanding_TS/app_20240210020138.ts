// Understanding unknown type
// unknown is a type that is more restrictive than any
let userInput : unknown;// this is a better alternative to using any
let userName : string;

userInput = 5;
userInput = 'Antoine';

// userName = userInput; // this will throw an error because unknown is more restrictive than any

// to fix this error you can use a type check
if (typeof userInput === 'string'){
   userName = userInput;
}

// Understanding never type
// never is a type that is used when a function never returns anything
// this is different from void because void is used when a function does not return anything

function generateError(message : string, code : number) : never {
   throw {message : message, errorCode : code};
}

generateError('An error occurred', 500); // this will throw an error and stop the script from running