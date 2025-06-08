type Student = {
    title: string; 
    age: number;
    isStudent: boolean; 
};

let students: Student[] = [
    {title: "Маша", age:22 , isStudent: true},
    {title: "Ростислав", age:25 , isStudent: true},
    {title: "Борис", age:23 , isStudent: true},
    {title: "Мага", age:34 , isStudent: true},
    {title: "Анастасия", age:21 , isStudent: true},
    {title: "Евгения", age:26 , isStudent: true},
    {title: "Жанна", age:29 , isStudent: true},
    {title: "Юлия", age:22 , isStudent: true}
];
let name: string = "Борис "

function findStudentByName (students: Student[], name: string): Student | undefined {
    return students.find(student => student.title.trim() === name.trim() );
}

console.log(findStudentByName(students, name));