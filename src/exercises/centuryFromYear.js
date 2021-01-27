"use strict";
exports.__esModule = true;
exports.centuryFromYear = void 0;
function centuryFromYear(year) {
    return Math.floor((year - 1) / 100) + 1;
}
exports.centuryFromYear = centuryFromYear;
console.log(centuryFromYear(1905));
console.log(centuryFromYear(1700));
