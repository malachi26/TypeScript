interface IPoint {
    getDist(): number;
}

module Shapes {
    export class Point implements IPoint {
        constructor(public x: number, public y: number) { }
        getDist() {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        }

        static origin = new Point(0, 0);
    }
}

var p: IPoint = new Shapes.Point(3, 4);
var dist = p.getDist();

var people = new Array();

interface IPerson {
    greeter(): string;

}

//module People {
//    class Greeter {
//        greeting: string;
//        constructor(message: string) {
//            this.greeting = message;
//        }
//        greet() {
//            return "Hello, " + this.greeting;
//        }
//    }
//}