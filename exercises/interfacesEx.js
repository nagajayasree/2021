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
