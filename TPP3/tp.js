"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ===== Exercice 1 =====
console.log("Hello TypeScript!");
// ===== Exercice 2 =====
let name = "Alice";
let age = 25;
let isAdmin = false;
let scores = [95, 87, 92];
let studentTuple = ["Bob", 20];
var RoleEnum;
(function (RoleEnum) {
    RoleEnum[RoleEnum["User"] = 0] = "User";
    RoleEnum[RoleEnum["Admin"] = 1] = "Admin";
    RoleEnum[RoleEnum["SuperAdmin"] = 2] = "SuperAdmin";
})(RoleEnum || (RoleEnum = {}));
let userRole = RoleEnum.Admin;
// ===== Exercice 3 =====
let id = "abc123";
let unknownVar = "Hello";
if (typeof unknownVar === "string") {
    console.log(unknownVar.length);
}
const user1 = { id: 1, name: "Alice", isAdmin: true };
// ===== Exercice 5 =====
function add(a, b) {
    return a + b;
}
function greet(name, age) {
    if (age !== undefined) {
        console.log(`Bonjour ${name}, vous avez ${age} ans.`);
    }
    else {
        console.log(`Bonjour ${name} !`);
    }
}
function power(base, exp = 2) {
    return Math.pow(base, exp);
}
function combine(a, b) {
    return a + b;
}
// ===== Exercice 6 =====
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Salut, je suis ${this.name}.`);
    }
}
class Student extends Person {
    school;
    constructor(name, age, school) {
        super(name, age);
        this.school = school;
    }
}
class Shape {
}
class Circle extends Shape {
    radius;
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius ** 2;
    }
}
class Rectangle extends Shape {
    width;
    height;
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
}
class Car {
    drive() {
        console.log("La voiture roule.");
    }
}
// ===== Exercice 7 =====
function identity(value) {
    return value;
}
function getFirst(arr) {
    return arr[0];
}
class GenericRepository {
    items = [];
    add(item) { this.items.push(item); }
    remove(index) { this.items.splice(index, 1); }
    getAll() { return this.items; }
}
// ===== Exercice 8 =====
// (Modules non applicables dans un seul fichier → fonctions intégrées)
function mathAdd(a, b) { return a + b; }
function mathSubtract(a, b) { return a - b; }
//# sourceMappingURL=tp.js.map