 // создаём массив чисел из которых будем искать чётный числа 
let numbers: number[]  = [1, 2, 3, 4, 5, 6]; 

// объявляем функцию, которая получает массив чисел и возвращает только чётные 
function getEvenNumbers(numbers: number[]): number[]{

// создаём новый пустой массив, в него будем добавлять чётные числа
let evenNumbers: number[] = []

// проходим по каждому числу в массивемассива
   for ( let number of numbers ){

        // проверка на чётность 
        if (number % 2 === 0 ){

            // добавляем это число в новый массив evenNumbers
            evenNumbers.push(number)
        }
    }
    // после прохода по массиву возвращаем массив с чётными числами 
    return evenNumbers;
}
// вызываем функцию и  выводим результат в консоль 
console.log(getEvenNumbers(numbers));