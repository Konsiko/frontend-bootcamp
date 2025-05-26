function calculateDiscount(price: number, discount: number): number {
    return price-price*(discount/100);
}

const priceInput = document.getElementById("price") as HTMLInputElement;
const discountInput = document.getElementById("discount") as HTMLInputElement;
const resultEl = document.getElementById("result")!;
const button = document.getElementById("calc")!;

button.addEventListener("click", () => {
  const price = parseFloat(priceInput.value);
  const discount = parseFloat(discountInput.value);

  if (isNaN(price) || isNaN(discount)) {
    resultEl.textContent = "Введите корректные числа";
    return;
  }

  const result = calculateDiscount(price, discount);
  resultEl.textContent = `Цена со скидкой: ${result.toFixed(2)} ₽`;
});