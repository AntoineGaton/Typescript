// inferred types 
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

const person = {
   name : "Antoine",
   age : 35,
   hobbies : ['Coding', 'Video Games'],
   role : [1, "software developer"]
}

let arr: any[]
let otherArr: number[]
let otherArr2: string[]
let otherArr3: boolean[] 

console.log(person)
console.log(person.name)