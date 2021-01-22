var myMsg = { text: "hi", time: "1hr ago" };
function printMsg(msgParam) {
    console.log(msgParam.text);
}
printMsg(myMsg);
var getName = function (player) {
    console.log(player.firstname + " " + player.lastname);
};
getName({ firstname: "dhgjf", lastname: "vjdjqv" });
getName({ firstname: "feefhreb" });
getName({ lastname: "dsvjkavscv" });
function bookInfo(info) {
    var newBook = { pages: info.pages, color: info.color };
    return newBook;
}
var myBook = bookInfo({ pages: 27, color: "red" });
console.log(myBook);
var getBookInfo = function (info) {
    var newBook = { pages: info.pages, color: info.color };
    console.log(newBook);
};
getBookInfo({ pages: 56, color: "green" });
var cities = { x: "NJ", y: "NY" };
var StudentInfo = /** @class */ (function () {
    function StudentInfo(name, marks) {
        this.name = name;
        this.marks = marks;
    }
    StudentInfo.prototype.printMarks = function (marks) {
        return marks;
    };
    return StudentInfo;
}());
var std = new StudentInfo("js", 567);
console.log(std);
console.log(std.printMarks(45));
function playerFullName(player) {
    return "fullName is " + player.name.firstname + " " + player.name.lastname;
}
console.log(playerFullName({ name: { firstname: "dfsdf", lastname: "fwvfvf" } }));
function PersonalDetails(driver) {
    return driver.personalInfo;
}
console.log(PersonalDetails({ personalInfo: { name: "ravi", age: 32 } }));
