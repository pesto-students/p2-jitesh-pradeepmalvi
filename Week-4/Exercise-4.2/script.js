function Person() {}

Person.prototype.initialize = function (name, age) {
  this.name = name;
  this.age = age;
};

// TODO: create the class Teacher and a method teach

function Teacher() {}
Teacher.prototype.teach = function (subject) {
  return `${this.name} is now teaching ${subject}`;
};

Object.setPrototypeOf(Teacher.prototype, Person.prototype);

var him = new Teacher();
him.initialize("Adam", 45);
console.log(him.teach("Inheritance"));
