"use strict";
var Name = { name: "js" };
function greet(prop) {
    document.write("Hello " + prop.name + " how are you doing today?");
    console.log("Hello " + prop.name + " how are you doing today?");
    return "Hello, " + prop.name + " how are you doing today?";
}
greet(Name);
