var passedCount = 0;
var failedCount = 0;
var grades = [5, 3, 4, 2, 5, 4, 3, 5];
for (var _i = 0, grades_1 = grades; _i < grades_1.length; _i++) {
    var grade = grades_1[_i];
    if (grade >= 4) {
        passedCount++;
    }
    else {
        failedCount++;
    }
}
console.log("Сдали", passedCount);
console.log("Провалили", failedCount);
