import { Triangle, Square, Circle } from "./shapes";

describe("Square test", () => {
    test("test for a square with a black background", () => {
      const shape = new Square();
      expect(shape.render("black")).toEqual(
        '<rect x="73" y="40" width="160" height="160" fill="black" />'
      );
    });
});

describe("Circle test", () => {
    test("test for a circle with a green background", () => {
      const shape = new Circle();
      expect(shape.render("green")).toEqual(
        '<circle cx="150" cy="115" r="80" fill="green" />'
      );
    });
});

describe("Triangle test", () => {
    test("test for a tiangle with a yellow background", () => {
      const shape = new Triangle();
      expect(shape.render("yellow")).toEqual(
        '<polygon points="150, 18 244, 182 56, 182" fill="yellow" />'
      );
    });
});