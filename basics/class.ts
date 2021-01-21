class Student {
  stuName: string;
  stuSection: string | void;
  constructor(name: string, section: string | void) {
    this.stuName = name;
    this.stuSection = section;
  }
  printName(name: string) {
    console.log(`Student name is ${name}`);
  }
}

let s1 = new Student("Raj");
s1.stuName = "Leela";
console.log(s1.stuName);
console.log(s1.stuSection);
s1.printName("Mani");
