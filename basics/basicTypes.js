var a = 10;
if (a >= 10) {
    var a = a - 1;
}
console.log(a);
var b = 15;
if (b <= 20) {
    var c = b - 5;
    console.log(c);
}
console.log(c); //error:as it is limited to block scope
var isWorking = false;
//type not assigned
var helloWorld = "Hello world";
helloWorld = "hi";
// helloWorld = 10; //error: number cannot be assigned
console.log(helloWorld);
//type assigned
var count = 6;
// count = "7"; //error:str cannot be assigned
var myname = "njs";
var intro = "My Name is " + myname;
var nums = [1, 2, 3];
var numArr = [2, 5, 6];
// numArr = ["hi"];
var numarr = [5, 6, 7];
var names = ["js", "ss"];
var places = ["hyd", "knr"];
var person;
person = ["name", 3];
console.log(person[0]);
var user1 = {
    name: "njs",
    id: 4
};
var user2 = {
    name: "njs",
    id: 4
};
var tuple = ["string", 34];
tuple.push("adding");
tuple[1] = "changing";
console.log(tuple[0], tuple[2]);
console.log(tuple);
tuple = []; //clearing
console.log(tuple);
