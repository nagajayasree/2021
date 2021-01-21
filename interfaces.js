"use strict";
function printName(fullName) {
    console.log(fullName.firstname, fullName.lastname);
}
var myName = { firstname: "fn", lastname: "ln" };
printName(myName);
