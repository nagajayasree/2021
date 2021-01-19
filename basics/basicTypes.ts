var a = 10;
if (a >= 10) {
  var a = a - 1;
}
console.log(a);

let b = 15;
if (b <= 20) {
  let c = b - 5;
  console.log(c);
}
console.log(c); //error:as it is limited to block scope

let isWorking: boolean = false;

//type not assigned
let helloWorld = "Hello world";
helloWorld = "hi";
// helloWorld = 10; //error: number cannot be assigned
console.log(helloWorld);

//type assigned
let count: number = 6;
// count = "7"; //error:str cannot be assigned
let myname: string = "njs";
let intro: string = `My Name is ${myname}`;

let nums = [1, 2, 3];
let numArr: number[] = [2, 5, 6];
// numArr = ["hi"];
let numarr: Array<number> = [5, 6, 7];
let names: string[] = ["js", "ss"];
let places: Array<string> = ["hyd", "knr"];

let person: [string, number];
person = ["name", 3];
console.log(person[0]);

const user1 = {
  name: "njs",
  id: 4,
};

interface User {
  name: string;
  id: number;
}

const user2: User = {
  name: "njs",
  id: 4,
};

let tuple = ["string", 34];
tuple.push("adding");
tuple[1] = "changing";
console.log(tuple[0], tuple[2]);
console.log(tuple);
tuple = []; //clearing
console.log(tuple);
