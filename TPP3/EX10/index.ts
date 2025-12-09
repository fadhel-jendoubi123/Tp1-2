import { Repository } from "./services/Repository.js";
import { Library } from "./services/Library.js";
import { ApiService } from "./services/ApiService.js";
import { User } from "./models/User.js";
import { Admin } from "./models/Admin.js";
import { Book } from "./models/Book.js";
import { Person } from "./models/Person.js";

async function main() {
  const bookRepo = new Repository<Book>();
  const userRepo = new Repository<Person>();

  const library = new Library(bookRepo, userRepo);

  const books = await ApiService.fetchBooks();
  books.forEach(book => library.addBook(book));

  userRepo.add(new User(1, "Alice"));
  userRepo.add(new Admin(2, "Bob"));

  console.log("Liste des livres :", library.listBooks());

  console.log("Recherche 'du':", library.searchBook("du"));

  console.log(library.borrowBook(1, 1));
  console.log(library.returnBook(1));
}

main();
