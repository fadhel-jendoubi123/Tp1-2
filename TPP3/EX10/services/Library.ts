import { Repository } from "./Repository.js";
import { Book } from "../models/Book.js";
import { Person } from "../models/Person.js";

export class Library {
  constructor(
    private bookRepo: Repository<Book>,
    private userRepo: Repository<Person>
  ) {}

  addBook(book: Book) {
    this.bookRepo.add(book);
  }

  removeBook(id: number) {
    this.bookRepo.remove(id);
  }

  listBooks() {
    return this.bookRepo.getAll();
  }

  searchBook(keyword: string): Book[] {
    return this.bookRepo
      .getAll()
      .filter(b => 
        b.title.toLowerCase().includes(keyword.toLowerCase())
        || b.author.toLowerCase().includes(keyword.toLowerCase())
      );
  }

  borrowBook(bookId: number, userId: number): string {
    const book = this.bookRepo.findById(bookId);
    const user = this.userRepo.findById(userId);

    if (!book) return "Livre introuvable.";
    if (!user) return "Utilisateur introuvable.";
    if (!book.available) return "Livre déjà emprunté.";

    book.available = false;
    return `${user.name} a emprunté "${book.title}"`;
  }

  returnBook(bookId: number): string {
    const book = this.bookRepo.findById(bookId);
    if (!book) return "Livre introuvable.";

    book.available = true;
    return `Le livre "${book.title}" a été rendu.`;
  }
}
