function sumTwoNumbers(a, b) {
    return a + b;
}
var num1Input = document.getElementById("num1");
var num2Input = document.getElementById("num2");
var resultSum = document.getElementById("result");
var buttom = document.getElementById("click");
buttom.addEventListener("click", function () {
    var num1 = parseFloat(num1Input.value);
    var num2 = parseFloat(num2Input.value);
    if (isNaN(num1) || isNaN(num2)) {
        resultSum.textContent = "введите корректные числа";
        return;
    }
    var result = sumTwoNumbers(num1, num2);
    resultSum.textContent = "\u0421\u0443\u043C\u043C\u0430 \u0434\u0432\u0443\u0445 \u0447\u0438\u0441\u0435\u043B ".concat(result);
});
