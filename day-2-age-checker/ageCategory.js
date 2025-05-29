var ageInput = document.getElementById("age");
var button = document.getElementById("getAge");
var getCategory = document.getElementById("category");
function getAgeCategory(age) {
    var message;
    if (age >= 0 && age <= 12) {
        message = "Ребёнок";
    }
    else if (age >= 13 && age <= 17) {
        message = "Подросток";
    }
    else if (age >= 18 && age <= 59) {
        message = "Взрослый";
    }
    else if (age >= 60 && age <= 130) {
        message = "Пенсионер";
    }
    else {
        message = "Вы очень старый";
    }
    return message;
}
button.addEventListener("click", function () {
    var age = parseFloat(ageInput.value);
    if (isNaN(age)) {
        getCategory.textContent = "введите корректные числа";
    }
    var ageCategory = getAgeCategory(age);
    getCategory.textContent = "\u0412\u0430\u0448\u0430 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F ".concat(ageCategory);
});
