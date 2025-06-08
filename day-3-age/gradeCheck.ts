let passedCount = 0;
let failedCount = 0;

let grades: number [] = [5, 3, 4, 2, 5, 4, 3, 5];

for (let grade of grades){
    if (grade>= 4) {
        passedCount++;
    }
    else{
        failedCount++;
    }
}
console.log("Сдали", passedCount);
console.log("Провалили",failedCount);