class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}

Rectangle.prototype.area = function () {
    return (this.w * this.h);
}
/*
 * Create a Square class that inherits from Rectangle and implement class constructor
 */

class Square extends Rectangle { 
    constructor(s) {
        super(s) 
        this.w = s;
        this.h = s;
    }
}
