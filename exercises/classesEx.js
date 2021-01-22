var Greet = /** @class */ (function () {
    function Greet() {
    }
    Greet.prototype.greet = function () {
        return "Hello classes";
    };
    return Greet;
}());
var msg = new Greet();
console.log(msg.greet());
var Greeter = /** @class */ (function () {
    function Greeter() {
    }
    Greeter.prototype.greet = function (user) {
        return user + " is greeting";
    };
    return Greeter;
}());
var user = new Greeter();
console.log(user.greet("NJS"));
var Player = /** @class */ (function () {
    function Player(name, age, isPlaying) {
        this.isPlaying = false;
        this.name = name;
        this.age = age;
        this.isPlaying = isPlaying;
    }
    Player.prototype.getName = function () {
        return this.name;
    };
    return Player;
}());
var p1 = new Player("Virat", true);
console.log(p1.getName());
console.log(p1.isPlaying);
