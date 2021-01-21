"use strict";
var sides;
(function (sides) {
    sides[sides["base"] = 5] = "base";
    sides[sides["height"] = 6] = "height";
})(sides || (sides = {}));
function area(side1, side2) {
    if (side1 === void 0) { side1 = sides.base; }
    if (side2 === void 0) { side2 = sides.height; }
    console.log((1 / 2) * side1 * side2);
}
area();
