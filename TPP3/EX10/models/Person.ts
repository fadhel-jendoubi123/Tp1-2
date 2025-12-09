import { UserRole } from "../utils/Types.js";

export abstract class Person {
  constructor(
    public id: number,
    public name: string,
    public role: UserRole
  ) {}
}
