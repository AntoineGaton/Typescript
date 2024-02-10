/*
What is TypeScript?
- TypeScript is a superset of JavaScript.
   - It is a language that builds on JavaScript by adding syntax for type declarations and annotations.
- TypeScript is a statically-typed language, which means that it checks for type errors at compile time.
- TypeScript is a compiled language, which means that it is not run directly in the browser, but must be compiled into JavaScript before it can be run.
*/
const button = document.querySelector("button")!;

// ! tells TypeScript that the element will always exist
const num1 = document.getElementById("num1") as HTMLInputElement;

// as HTMLInputElement is a type cast
const num2 = document.getElementById("num2") as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener("click", function () {
  console.log(add(+num1.value, +num2.value));
  document.getElementById("result")!.innerHTML = add(
    +num1.value,
    +num2.value
  ).toString();
});
