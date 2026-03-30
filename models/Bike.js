const Vehicle = require('./Vehicle');

class Bike extends Vehicle {
    constructor(id, brand, price, hasSidecar) {
        super(id, brand, price);
        this.hasSidecar = hasSidecar; // 오토바이만의 속성 (사이드카 유무)
    }
}
module.exports = Bike;