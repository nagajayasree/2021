interface Person {
  name: string;
  age?: number;
}

function printName(person: Person) {
  console.log(person.name, person.age);
}

printName({ name: "jay" });
