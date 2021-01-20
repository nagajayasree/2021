interface greetProp {
  name: string;
}
let Name = { name: "js" };
function greet(prop: greetProp): string {
  document.write(`Hello ${prop.name} how are you doing today?`);
  console.log(`Hello ${prop.name} how are you doing today?`);
  return `Hello, ${prop.name} how are you doing today?`;
}
greet(Name);
