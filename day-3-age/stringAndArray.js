var rawArray = "  matrix, interstellar , dune , avatar , tenet  ";
var result = rawArray
    .split(",")
    .map(function (film) { return film.trim().toUpperCase(); });
console.log(result);
var filtered = result
    .filter(function (film) { return film.length >= 5; })
    .map(function (film) { return "\u0424\u0438\u043B\u044C\u043C: ".concat(film); });
console.log(filtered);
