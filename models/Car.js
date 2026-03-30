const Vehicle = require('./Vehicle');

class Car extends Vehicle {
    constructor(id, brand, price, doors) {
        super(id, brand, price); // 부모 속성 상속
        this.doors = doors;      // 자동차만의 속성 (문 개수)
    }
}
module.exports = Car;