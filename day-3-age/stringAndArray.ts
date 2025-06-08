    
let rawArray = "  matrix, interstellar , dune , avatar , tenet  ";
let result = rawArray
    .split(",")
    .map(film=>film.trim().toUpperCase());
 console.log(result);
 let filtered = result
    .filter(film=>film.length>=5)
    .map(film=>`Фильм: ${film}` )
    console.log(filtered);