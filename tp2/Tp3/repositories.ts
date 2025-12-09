 import { User } from "./models";

interface Repository<T> {
  add(item: T): void;
  remove(id: number): void;
  getAll(): T[];
}

class UserRepository implements Repository<User> {
  private users: User[] = [];

  add(item: User): void {
    this.users.push(item);
  }

  remove(id: number): void {
    const index = this.users.findIndex(u => u.id === id);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }

  getAll(): User[] {
    return this.users;
  }
}

export { Repository, UserRepository };