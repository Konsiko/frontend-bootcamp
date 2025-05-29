let userAge: number = 17;
let isAdmin: boolean  = false;
function checkAcess(userAge: number, isAdmin: boolean): string {
    if (userAge >=18 || isAdmin ){
        return "Доступ разрешён";
    } else 
    return "Доступ запрёщен";
}
console.log(checkAcess(userAge, isAdmin));
