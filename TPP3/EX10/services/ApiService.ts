import { Book } from "../models/Book.js";

export class ApiService {
  static fetchBooks(): Promise<Book[]> {
    return Promise.resolve([
      { id: 1, title: "1984", author: "Orwell", year: 1949, available: true },
      { id: 2, title: "Dune", author: "Frank Herbert", year: 1965, available: true },
      { id: 3, title: "Sapiens", author: "Harari", year: 2011, available: false },
    ]);
  }
}
