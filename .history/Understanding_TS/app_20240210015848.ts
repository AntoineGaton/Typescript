// Understanding unknown type
// unknown is a type that is more restrictive than any
let userInput : unknown;
let userName : string;

userInput = 5;
userInput = 'Antoine';

// userName = userInput; // this will throw an error because unknown is more restrictive than any

