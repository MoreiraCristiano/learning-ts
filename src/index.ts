class Pessoa {
  public readonly name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const p1 = new Pessoa("Cristiano");
console.log(p1);

const arr = [1, 2, 3, 4];

let filtered = arr.filter((num) => num < 2);

console.log(filtered);
