import { Repository } from "./Repository.js";
import { Book } from "../models/Book.js";
import { Person } from "../models/Person.js";
export declare class Library {
    private bookRepo;
    private userRepo;
    constructor(bookRepo: Repository<Book>, userRepo: Repository<Person>);
    addBook(book: Book): void;
    removeBook(id: number): void;
    listBooks(): Book[];
    searchBook(keyword: string): Book[];
    borrowBook(bookId: number, userId: number): string;
    returnBook(bookId: number): string;
}
//# sourceMappingURL=Library.d.ts.map