class Car {
    engine: string;
    color: string;


    constructor(engine: string) {
        this.engine = engine;
    }
    
    start() {
        alert('engine started: ' + this.engine);
    }

    stop() {
        alert('Engine stopped: ' + this.engine);
    }
}

window.onload = function () {
    var car = new Car("V8");
    car.start();
    car.stop();
};