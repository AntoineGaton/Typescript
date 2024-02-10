/*
What is TypeScript?
- TypeScript is a superset of JavaScript.
   - It is a language that builds on JavaScript by adding syntax for type declarations and annotations.
- TypeScript is a statically-typed language, which means that it checks for type errors at compile time.
- TypeScript is a compiled language, which means that it is not run directly in the browser, but must be compiled into JavaScript before it can be run.
*/
var button = document.querySelector('button');
// ! tells TypeScript that the element will always exist
var num1 = document.getElementById('num1');
// as HTMLInputElement is a type cast
var num2 = document.getElementById('num2');
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener('click', function () {
    console.log(add(+num1.value, +num2.value));
    document.getElementById('result').innerHTML = add(+num1.value, +num2.value).toString();
});
