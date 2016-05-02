var Demo_Shapes_and_People;
(function (Demo_Shapes_and_People) {
    var Circle = (function () {
        function Circle(name) {
            this.name = name;
        }
        return Circle;
    })();
    var shape = (function () {
        function shape(name, corners, sides) {
            this.name = name;
            this.corners = corners;
            this.sides = sides;
        }
        return shape;
    })();
    var squareIt;
    var p = {
        name: 'Colleen',
        age: 40,
        kids: 4,
        calcPets: function () {
            return this.kids * 2;
        },
        makeYounger: function (years) {
            this.age -= years;
        },
        greet: function (msg) {
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
})(Demo_Shapes_and_People || (Demo_Shapes_and_People = {}));
//# sourceMappingURL=Shape.js.map