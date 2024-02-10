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

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
enum Role {ADMIN = "ADMIN", READ_ONLY = 200, AUTHOR = true};

const person = {
   name : "Antoine",
   age : 35,
   hobbies : ['Coding', 'Video Games'],
   role : Role.ADMIN
}

if (person.role === Role.ADMIN){
   console.log(`${person.name} is an admin....`);
}

let arr: any[]
let otherArr: number[]
let otherArr2: string[]
let otherArr3: boolean[] 

console.log(person)
console.log(person.name)