const Vehicle = require('./Vehicle');

class Truck extends Vehicle {
    constructor(id, brand, price, capacity) {
        super(id, brand, price);
        this.capacity = capacity; // 트럭만의 속성 (적재 용량)
    }
}
module.exports = Truck;