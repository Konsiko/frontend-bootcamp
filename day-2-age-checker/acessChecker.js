var userAge = 17;
var isAdmin = false;
function checkAcess(userAge, isAdmin) {
    if (userAge >= 18 || isAdmin) {
        return "Доступ разрешён";
    }
    else
        return "Доступ запрёщен";
}
console.log(checkAcess(userAge, isAdmin));
