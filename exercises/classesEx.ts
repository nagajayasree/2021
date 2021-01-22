class Greet {
  greet(): string {
    return "Hello classes";
  }
}

let msg = new Greet();
console.log(msg.greet());

class Greeter {
  public greet(user: string): string {
    return `${user} is greeting`;
  }
}

let user = new Greeter();
console.log(user.greet("NJS"));

let Age: number | undefined;
class Player {
  private name: string;
  isPlaying: boolean | undefined = false;
  age: typeof Age;
  constructor(name: string, isPlaying?: boolean, age?: typeof Age) {
    this.name = name;
    this.isPlaying = isPlaying;
    this.age = age;
  }
  getPlayerName() {
    return this.name;
  }
}

let p1 = new Player("Virat", true);
console.log(p1.getPlayerName());
console.log(p1.isPlaying);
