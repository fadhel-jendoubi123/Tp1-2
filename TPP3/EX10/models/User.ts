import { Person } from "./Person.js";

export class User extends Person {
  constructor(id: number, name: string) {
    super(id, name, "User");
  }
}
