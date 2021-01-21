"use strict";
// enum values {
//   weight = 56,
//   height = 6,
// }
function bmi(weight, height) {
    var bmi = weight / Math.sqrt(height);
    return bmi <= 18.5
        ? "Under weight"
        : bmi <= 25.0
            ? "Normal"
            : bmi <= 30.0
                ? "Overweight"
                : "Obese";
}
console.log(bmi(80, 1.8));
