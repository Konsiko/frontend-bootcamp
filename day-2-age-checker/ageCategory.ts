
const ageInput = document.getElementById("age") as HTMLInputElement;
const button = document.getElementById("getAge")!;
const getCategory = document.getElementById("category")!;

function getAgeCategory(age:number): string{
    let message: string;
    if (age >=0 && age <=12 ){
        message = "Ребёнок";
    } else if  (age >=13 && age <=17 ){
        message = "Подросток";
    } else if (age >=18 && age <=59 ){
        message = "Взрослый";
    } else if (age >=60 && age <=130 ){
        message = "Пенсионер";
    } else {
    message = "Вы очень старый";
      }  return message;
}
button.addEventListener ("click", () =>{

    const age=parseFloat(ageInput.value);
    if (isNaN(age) ){
        getCategory.textContent = "введите корректные числа";
    }
    const ageCategory = getAgeCategory(age)
    getCategory.textContent = `Ваша категория ${ageCategory}`;
} )