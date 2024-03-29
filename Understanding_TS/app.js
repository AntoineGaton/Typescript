function add(n1, n2) {
    return n1 + n2;
}
// void is a type that is used when a function does not return anything
// it is not necessary to use void as the return type of a function
function printResult(num) {
    console.log('Result: ' + num);
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
// you infer the type of a function by using the function keyword
var prints;
// you can also explicitly define the type of a function
prints = printResult;
prints(add(5, 12));
// you can also define the type of a function using arrow functions
var combinedValues;
combinedValues = add;
prints(combinedValues(8, 8));
addAndHandle(10, 20, function (result) {
    console.log(result);
});
