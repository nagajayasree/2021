function printName(fullName: { firstname: string; lastname: string }) {
  console.log(fullName.firstname, fullName.lastname);
}

let myName = { firstname: "fn", lastname: "ln" };
printName(myName);
