export class Library {
    bookRepo;
    userRepo;
    constructor(bookRepo, userRepo) {
        this.bookRepo = bookRepo;
        this.userRepo = userRepo;
    }
    addBook(book) {
        this.bookRepo.add(book);
    }
    removeBook(id) {
        this.bookRepo.remove(id);
    }
    listBooks() {
        return this.bookRepo.getAll();
    }
    searchBook(keyword) {
        return this.bookRepo
            .getAll()
            .filter(b => b.title.toLowerCase().includes(keyword.toLowerCase())
            || b.author.toLowerCase().includes(keyword.toLowerCase()));
    }
    borrowBook(bookId, userId) {
        const book = this.bookRepo.findById(bookId);
        const user = this.userRepo.findById(userId);
        if (!book)
            return "Livre introuvable.";
        if (!user)
            return "Utilisateur introuvable.";
        if (!book.available)
            return "Livre déjà emprunté.";
        book.available = false;
        return `${user.name} a emprunté "${book.title}"`;
    }
    returnBook(bookId) {
        const book = this.bookRepo.findById(bookId);
        if (!book)
            return "Livre introuvable.";
        book.available = true;
        return `Le livre "${book.title}" a été rendu.`;
    }
}
//# sourceMappingURL=Library.js.map