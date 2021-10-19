class Car {
  constructor(make, model, color, image, rgsNo, price) {
    this.make = make;
    this.model = model;
    this.color = color;
    this.image = image;
    this.rgsNo = rgsNo;
    this.price = price;
  }
  editPrice(newPrice) {
    this.price = newPrice;
  }
  showAll() {
    return `Car Make: ${this.make} \nCar Model: ${this.model} \nCar color: ${this.color} \nCar image: ${this.image} \nCar registeration number: ${this.rgsNo} \nCar price: ${this.price}`;
  }
}

const car1 = new Car('Toyota', 'Avalon', 'White', 'image demo', '4193245', '105000')
const car2 = new Car('Lexus', 'IS350', 'White', 'image demo', '4567245', '90000')
const car3 = new Car('Hyundai', 'Accent', 'Gray', 'image demo', '4567245', '17000')
const car4 = new Car('Toyota', 'Supra', 'black', 'image demo', '4567245', '160000')
const car5 = new Car('Nissan', 'Patrol', 'Gold', 'image demo', '4567245', '200000')

car1.editPrice(95000);

console.log(car1.showAll())
console.log(car2.showAll())
console.log(car3.showAll())
console.log(car4.showAll())
console.log(car5.showAll())