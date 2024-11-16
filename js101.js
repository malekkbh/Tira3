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

console.log("car speed", getSpeed());

console.log("car: ", car);

setBrand("BBB");
console.log("car: ", car);

const arr = [10, 60 , 99, 40, 50];

console.log("firstItem : ", arr[0]);

arr[0] = 85;

console.log("firstItem : ", arr[0]);

var sum = 0;

for (var i = 0; i < arr.length; i++) {
  sum += arr[i];
  // sum = sum + arr[i]

  //مجموع القيم
}

const sumArr = arr.reduce((sum, item) => {
  return (sum += item);
}, 0);

console.log("sum: ", sum);
console.log("sumArr: ", sumArr);

arr.forEach((value, index) => {
  console.log("value: ", value, "index:", index);
});

const mapArr = arr.map((item) => {
  return { grade: item, isPass: item >= 55 };
});



console.log("map arr : " , mapArr);

const filterArr = mapArr.filter(item => {
  return item.isPass ; 
  // return item.isPass == true ; 
  // return item.isPass != false ; 
})

console.log("filter arr: " , filterArr); 


