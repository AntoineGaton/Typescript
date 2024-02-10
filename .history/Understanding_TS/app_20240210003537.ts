// object with inferred and explicit types
// const person : {
//    name : string;
//    age : number;
//    hobbies : string[];
//    role : [number, string]
// }  = {
//    name : "Antoine",
//    age : 35,
//    hobbies : ['Coding', 'Video Games'],
//    role : [1, "software developer"]
// }

const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2;

const person = {
   name : "Antoine",
   age : 35,
   hobbies : ['Coding', 'Video Games'],
   role : ADMIN
}

if (person.role === ADMIN){
   console.log(`${person.name} is an admin');
}


let arr: any[]
let otherArr: number[]
let otherArr2: string[]
let otherArr3: boolean[] 

console.log(person)
console.log(person.name)