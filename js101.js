const name = "Code Zone";
console.log(name);

const car = {
  brand: "btata",
  speed: 0,
  wheels: 4,
};

const getSpeed = () => car.speed;

// const getSpeed = () => {
//     return car.speed ;
// }

const setBrand = (name) => {
  if (!name) {
    return false;
  }
  car.brand = name;
};

console.log("car speed" , getSpeed());

console.log("car: " , car);

setBrand("BBB")
console.log("car: " , car);


