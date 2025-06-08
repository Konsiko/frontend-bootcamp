// Массив имён
let names: string[] = ["Ростислав", "Мария", "Артем", "Лаврентий", "Слава"];

// Поисковый запрос
let query :string = "Слав";

// Функция, которая возвращает имена, содержащие запрос (без учёта регистра)
function searchNames (names: string[], query: string): string[]{
    return names.filter(name => 
        name.toLowerCase().includes(query.toLowerCase()));
}

// Вызываем функцию и выводим результат
console.log (searchNames(names,query));