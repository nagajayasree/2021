export type Props = {
  name: string;
  age: number;
  isActive: false;
  veggies: string[];
  result: "pass" | "fail";
  obj: object;
  obj2: {};
  obj3: {
    subject: string;
    grade: string;
  };
  objAr: {
    id: number;
    job: string;
  }[];
  getName: {
    [fname: string]: string;
  };
  //   onClick: () => void;
  onChange: (id: number) => void;
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
  optionalProp?: any;
};

//declaration merging
interface Song {
  artist: string;
}
interface Song {
  song: string;
}
const song: Song = {
  artist: "spb",
  song: "jaamu ratiri",
};
console.log(song);

// type MyName = {
//   firstName: string | any;
// };
// type MyName = {
//   lastName: string | any;
// }; //error:duplicate identifier MyName

//extends and implements
class Car {
  printCar = () => {
    console.log("this is my car");
  };
}
interface NewCar extends Car {
  name: string;
}
class NewestCar implements NewCar {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  printCar = () => {
    console.log("this is my car");
  };
}
let car = new NewestCar("newCAR");
console.log(car.name);

//intersection
type Name = {
  name: string;
};

type Age = {
  age: number;
};

type Person = Name & Age;
// let person = ({ name, age }: Person): any => console.log(name, age);
class person implements Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  printInfo = () => {
    console.log(`Name:${this.name},Age:${this.age}`);
  };
}
let p1 = new person("dfsf", 56);
p1.printInfo();
