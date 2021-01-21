var Student = /** @class */ (function () {
    function Student(name, section) {
        this.stuName = name;
        this.stuSection = section;
    }
    Student.prototype.printName = function (name) {
        console.log("Student name is " + name);
    };
    return Student;
}());
var s1 = new Student("Raj");
s1.stuName = "Leela";
console.log(s1.stuName);
console.log(s1.stuSection);
s1.printName("Mani");
