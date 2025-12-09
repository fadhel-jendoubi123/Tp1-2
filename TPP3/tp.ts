// ===== Exercice 1 =====
console.log("Hello TypeScript!");

// ===== Exercice 2 =====
let name: string = "Alice";
let age: number = 25;
let isAdmin: boolean = false;
let scores: number[] = [95, 87, 92];
let studentTuple: [string, number] = ["Bob", 20];
enum RoleEnum { User, Admin, SuperAdmin }
let userRole = RoleEnum.Admin;

// ===== Exercice 3 =====
let id: string | number = "abc123";
type A = { x: number };
type B = { y: string };
type C = A & B;
type Status = "pending" | "done" | "canceled";
let unknownVar: unknown = "Hello";
if (typeof unknownVar === "string") {
  console.log((unknownVar as string).length);
}

// ===== Exercice 4 =====
interface UserInterface {
  id: number;
  name: string;
  email?: string;
  readonly isAdmin: boolean;
}
const user1: UserInterface = { id: 1, name: "Alice", isAdmin: true };
interface AdminInterface extends UserInterface {
  permissions: string[];
}

// ===== Exercice 5 =====
function add(a: number, b: number): number {
  return a + b;
}
function greet(name: string, age?: number): void {
  if (age !== undefined) {
    console.log(`Bonjour ${name}, vous avez ${age} ans.`);
  } else {
    console.log(`Bonjour ${name} !`);
  }
}
function power(base: number, exp: number = 2): number {
  return Math.pow(base, exp);
}
function combine(a: string, b: string): string;
function combine(a: number, b: number): number;
function combine(a: any, b: any): any {
  return a + b;
}

// ===== Exercice 6 =====
class Person {
  constructor(public name: string, public age: number) {}
  greet(): void {
    console.log(`Salut, je suis ${this.name}.`);
  }
}
class Student extends Person {
  constructor(name: string, age: number, public school: string) {
    super(name, age);
  }
}
abstract class Shape {
  abstract area(): number;
}
class Circle extends Shape {
  constructor(public radius: number) { super(); }
  area(): number {
    return Math.PI * this.radius ** 2;
  }
}
class Rectangle extends Shape {
  constructor(public width: number, public height: number) { super(); }
  area(): number {
    return this.width * this.height;
  }
}
interface Drivable {
  drive(): void;
}
class Car implements Drivable {
  drive(): void {
    console.log("La voiture roule.");
  }
}

// ===== Exercice 7 =====
function identity<T>(value: T): T {
  return value;
}
function getFirst<T>(arr: T[]): T|undefined {
  return arr[0];
}
class GenericRepository<T> {
  private items: T[] = [];
  add(item: T): void { this.items.push(item); }
  remove(index: number): void { this.items.splice(index, 1); }
  getAll(): T[] { return this.items; }
}
interface GenericApiResponse<T> {
  data?: T;
  error?: string;
}

// ===== Exercice 8 =====
// (Modules non applicables dans un seul fichier → fonctions intégrées)
function mathAdd(a: number, b: number): number { return a + b; }
function mathSubtract(a: number, b: number): number { return a - b; }
type ID = string | number;
interface ConfigType { timeout: number; }

