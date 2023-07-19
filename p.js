class People {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
class Person extends People {
  constructor(name, age, job) {
    super(name, age);
    this.job = job;
  }
}
const tanjiro = new Person("Kamada Tanjiro", 15, "Demon Slayer");
console.log(tanjiro.name);
console.log(tanjiro.age);
console.log(tanjiro.job);
