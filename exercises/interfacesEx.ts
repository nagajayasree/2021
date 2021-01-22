let myMsg = { text: "hi", time: "1hr ago" };
function printMsg(msgParam: { text: string; time: string }) {
  console.log(msgParam.text);
}
printMsg(myMsg);

interface IntPlayer {
  firstname?: string;
  lastname?: string;
}
let getName = (player: IntPlayer) => {
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

interface places {
  readonly x: string;
  readonly y: string;
}

let cities: places = { x: "NJ", y: "NY" };
// cities.x = "hyd"; //cannot change value

interface IntStudent {
  name: string;
  marks: number;
  getMarks?(marks: number): number;
}

class StudentInfo implements IntStudent {
  name: string;
  marks: number;
  constructor(name: string, marks: number) {
    this.name = name;
    this.marks = marks;
  }
  printMarks(marks: number): number {
    return marks;
  }
}

let std = new StudentInfo("js", 567);
console.log(std);
console.log(std.printMarks(45));
