function sumTwoNumbers(a: number, b:number): number{
    return a+b;
}

    const num1Input = document.getElementById("num1") as HTMLInputElement;
    const num2Input = document.getElementById("num2") as HTMLInputElement;
    const resultSum = document.getElementById("result")!;
    const buttom = document.getElementById("calc")!;

    buttom.addEventListener("click", ()=> {

    const num1=parseFloat(num1Input.value);

    const num2=parseFloat(num2Input.value);

    if (isNaN(num1) || isNaN(num2)){
        resultSum.textContent = "введите корректные числа";
        return;
}
    const result = sumTwoNumbers(num1, num2);
    resultSum.textContent = `Сумма двух чисел ${result}`;
});