var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var students = [
    { title: "Маша", age: 22, isStudent: true },
    { title: "Ростислав", age: 25, isStudent: true },
    { title: "Борис", age: 23, isStudent: true },
    { title: "Мага", age: 34, isStudent: true },
    { title: "Анастасия", age: 21, isStudent: true },
    { title: "Евгения", age: 26, isStudent: true },
    { title: "Жанна", age: 29, isStudent: true },
    { title: "Юлия", age: 22, isStudent: true }
];
function updateStatus(students) {
    return students.map(function (student) {
        if (student.age >= 23) {
            return __assign(__assign({}, student), { isStudent: false });
        }
        return student;
    });
}
console.log(updateStatus(students));
