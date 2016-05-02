module Demo_Shapes_and_People {
    interface IShape {
        name: string;
    }
    
    class Circle implements IShape {
        name: string;
        constructor(name) {
            this.name = name;
        }
    
    }
    
    class shape {
        name: string;
        corners: number;
        sides: number;
    
        constructor(name: string, corners: number, sides: number) {
            this.name = name;
            this.corners = corners;
            this.sides = sides;    
        }
    }
    
    interface Rectangle {
        h: number;
        w?: number;
    }
    
    var squareIt: (rect: Rectangle) => number;
    
    
        interface Person {
        name: string;
        age?: number;
        kids: number;
        calcPets: () => number;
        makeYounger: (years: number) => void;
        greet: (msg: string) => string;
    }

    var p: Person = {
        name: 'Colleen',
        age: 40,
        kids: 4,
        calcPets: function () {
            return this.kids * 2
        },
        makeYounger: function (years: number) {
            this.age -= years;
        },
        greet: function (msg: string) {
            return msg + ', ' + this.name;
        }
    };

    var pets = p.calcPets();
    console.log(pets);

    p.makeYounger(15);
    var newAge = p.age;
    console.log(newAge);

    var msg = p.greet('good day to you');
    console.log(msg);


}