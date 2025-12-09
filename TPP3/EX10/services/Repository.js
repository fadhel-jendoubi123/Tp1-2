export class Repository {
    items = [];
    add(item) {
        this.items.push(item);
    }
    remove(id) {
        this.items = this.items.filter(i => i.id !== id);
    }
    findById(id) {
        return this.items.find(i => i.id === id);
    }
    getAll() {
        return this.items;
    }
}
//# sourceMappingURL=Repository.js.map