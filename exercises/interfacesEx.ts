let myMsg = { text: "hi", time: "1hr ago" };
function printMsg(msgParam: { text: string; time: string }) {
  console.log(msgParam.text);
}
printMsg(myMsg);

interface Player {
  firstname?: string;
  lastname?: string;
}
let getName = (player: Player) => {
  console.log(`${player.firstname} ${player.lastname}`);
};
getName({ firstname: "dhgjf", lastname: "vjdjqv" });
getName({ firstname: "feefhreb" });
getName({ lastname: "dsvjkavscv" });

interface Book {
  pages: number;
  color: string;
}
function bookInfo(info: Book): { pages: number; color: string } {
  let newBook = { pages: info.pages, color: info.color };
  return newBook;
}
let myBook = bookInfo({ pages: 27, color: "red" });
console.log(myBook);

let getBookInfo = (info: Book) => {
  let newBook = { pages: info.pages, color: info.color };
  console.log(newBook);
};
getBookInfo({ pages: 56, color: "green" });
