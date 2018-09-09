function addition(firstNumber , lastNumber) {
    var result =firstNumber + lastNumber;
    return result;

}
function subtraction(firstNumber , lastNumber) {
    var result =firstNumber - lastNumber;
    return result;

}
function multiple(firstNumber , lastNumber) {
    var result =firstNumber * lastNumber;
    return result;

}
function division(firstNumber , lastNumber) {
    var result =firstNumber / lastNumber;
    return result;

}function modular(firstNumber , lastNumber) {
    var result =firstNumber%lastNumber;
     return result;

}

function myCal(operator) {
    var fn = Number(document.getElementById("firstValue").value);
    var ln = Number(document.getElementById("lastValue").value);
    var res;
    switch (operator) {
        case '+':
            res = addition(fn ,ln);
            break;
        case '-':
            res = subtraction(fn ,ln);
            break;

        case '*':
            res = multiple(fn ,ln);
            break;


         case '/':
             if (fn==0){

             }

            res = division(fn ,ln);
            break;

         case '%':
            res = modular(fn ,ln);
            break;



    }
    document.getElementById('result').value = res;

}
















// function multiple(firstNumber , lastNumber) {
//     var result =firstNumber * lastNumber;
//     return result;
//
// }
// function division(firstNumber , lastNumber) {
//     var result =firstNumber / lastNumber;
//     return result;
//
// }function modular(firstNumber , lastNumber) {
//     var result =firstNumber%lastNumber;
//      return result;
//
// }
// var addi = document.getElementById("addition");
// addi.onclick = function () {
//     var firstNumber =Number(document.getElementById("firstValue").value);
//     var lastNumber =Number(document.getElementById("lastValue").value);
//     document.getElementById("result").value = addition(firstNumber,lastNumber);
// }
//
//
// var sub = document.getElementById("subtraction");
// sub.onclick = function () {
//     var firstNumber =Number(document.getElementById("firstValue").value);
//     var lastNumber =Number(document.getElementById("lastValue").value);
//     document.getElementById("result").value = subtraction(firstNumber,lastNumber);
// }
// var mult = document.getElementById("multiple");
// mult.onclick = function () {
//     var firstNumber =Number(document.getElementById("firstValue").value);
//     var lastNumber =Number(document.getElementById("lastValue").value);
//     document.getElementById("result").value = multiple(firstNumber,lastNumber);
// }
// var div = document.getElementById("division");
// div.onclick = function () {
//     var firstNumber =Number(document.getElementById("firstValue").value);
//     var lastNumber =Number(document.getElementById("lastValue").value);
//     document.getElementById("result").value = division(firstNumber,lastNumber);
// }
// var mod = document.getElementById("modular");
// mod.onclick = function () {
//     var firstNumber =Number(document.getElementById("firstValue").value);
//     var lastNumber =Number(document.getElementById("lastValue").value);
//     document.getElementById("result").value = modular(firstNumber,lastNumber);
// }


















// var firstNumber = document.getElementById("firstValue");
// var lastNumber = document.getElementById('lastValue');
// var result = document.getElementById('result');
//
// var add = document.getElementById("addition");
// add.onclick = function () {
//     result.value = Number(firstNumber.value)+Number(lastNumber.value);
// };
// var sub = document.getElementById('subtraction');
// sub.onclick = function () {
//     result.value = Number(firstNumber.value)-Number(lastNumber.value);
// };
// var mul = document.getElementById('multiple');
// mul.onclick = function () {
//     result.value = Number(firstNumber.value)*Number(lastNumber.value);
// };
// var div = document.getElementById('division');
// div.onclick = function () {
//     result.value = Number(firstNumber.value)/Number(lastNumber.value);
// };
// var mod = document.getElementById('modular');
// mod.onclick = function () {
//     result.value = Number(firstNumber.value)%Number(lastNumber.value);
// };
