import { extend } from "@svgdotjs/svg.js";

class Shape {
    constructor() {
        this.color = "";
    }
    setColor(colorVar) {
        this.color = colorVar;
    }
}

export class Triangle extends Shape {
    render(shapeBackground) {
        this.setColor(shapeBackground);
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

export class Square extends Shape {
    render(shapeBackground) {
        this.setColor(shapeBackground);
        return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;
    }
}

export class Circle extends Shape {
    render(shapeBackground) {
        this.setColor(shapeBackground);
        return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
    }
}

// export class Circle extends Shape {
//     render() {
//         return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
//     }
// }

