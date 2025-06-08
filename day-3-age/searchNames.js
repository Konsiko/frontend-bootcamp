var names = ["Ростислав", "Мария", "Артем", "Лаврентий", "Слава"];
var query = "Слав";
function searchNames(names, query) {
    return names.filter(function (name) {
        return name.toLowerCase().includes(query.toLowerCase());
    });
}
console.log(searchNames(names, query));
