// have to define the properties of the Class, and the permissions of them
class Human {
  public name: string;
  public age: number;
  // private age: number;
  // use private property to protect the info, cannot access private data out side the class
  // ex) cannot use [person.age] in sayHi()
  public gender: string;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

// interface :

// interface Human {
//   name: string;
//   age: number;
//   gender: string;
// }

const hayoung = new Human("Ha young", 31, "male");

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}, and you are ${person.gender}`;
};

console.log(sayHi(hayoung));

export {};
