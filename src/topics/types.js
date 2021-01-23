"use strict";
exports.__esModule = true;
var song = {
    artist: "spb",
    song: "jaamu ratiri"
};
console.log(song);
// type MyName = {
//   firstName: string | any;
// };
// type MyName = {
//   lastName: string | any;
// }; //error:duplicate identifier MyName
//extends and implements
var Car = /** @class */ (function () {
    function Car() {
        this.printCar = function () {
            console.log("this is my car");
        };
    }
    return Car;
}());
var NewestCar = /** @class */ (function () {
    function NewestCar(name) {
        this.printCar = function () {
            console.log("this is my car");
        };
        this.name = name;
    }
    return NewestCar;
}());
var car = new NewestCar("newCAR");
console.log(car.name);
// let person = ({ name, age }: Person): any => console.log(name, age);
var person = /** @class */ (function () {
    function person(name, age) {
        var _this = this;
        this.printInfo = function () {
            console.log("Name:" + _this.name + ",Age:" + _this.age);
        };
        this.name = name;
        this.age = age;
    }
    return person;
}());
var p1 = new person("dfsf", 56);
p1.printInfo();
