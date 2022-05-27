const car = {
  brand: "BMW",
  model: "X1",
  year: "2018",
  getCar: function (arg) {
    console.log(`${this.brand} - ${this.model} - ${this.year}`);
    if (arg) {
      console.log("additional information");
      console.log(arg);
    }

    console.log("--------------------------------------");
  },
};

// BIND
const car2 = { brand: "Toyota", model: "Glanza", year: "2022" };
const getCar2 = car.getCar.bind(car2);
getCar2();

// CALL
car.getCar.call(
  { brand: "AUDI", model: "Q7", year: "2018" },
  { ownerType: "secondOwner" }
);

// APPLY
car.getCar.apply({ brand: "AUDI", model: "Q8", year: "2020" }, [
  { ownerType: "firstOwner" },
]);
