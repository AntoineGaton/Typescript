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

function generateError(message : string, code : number) : never {
   throw {message : message, errorCode : code};
}