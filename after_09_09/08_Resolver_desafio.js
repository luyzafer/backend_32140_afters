class Usuario {
  // valores por defecto de los parametros
  constructor(nombre, lastname, books = [], pets = []) {
    this.name = nombre;
    this.lastname = lastname;
    this.books = books;
    this.pets = pets;
  }

  getFullName() {
    return `${this.name} ${this.lastname}`;
  }

  addPets(pet) {
    this.pets.push(pet);
  }

  countPets() {
    return this.pets.length;
  }

  addBook(title, author) {
    this.books.push({ title, author: author });
  }

  //   getBookNames() {
  //     const bookNames = [];

  //     this.books.forEach((book) => bookNames.push(book.title));

  //     return bookNames;
  //   }
  getBookNames() {
    return this.books.map((book) => book.title);
  }
}

const usuario1 = new Usuario(
  "Juan",
  "Perrino",
  [{ title: "Harry Potter", author: "JK Rowling" }],
  ["gato", "perro"]
);

console.log(usuario1.getFullName());

console.log({ cantidad: usuario1.countPets() });
usuario1.addPets("loro");

console.log({ cantidad: usuario1.countPets() });

usuario1.addBook("La larga marcha", "Stephen King");

const booksName = usuario1.getBookNames();
console.log(booksName);

const usuario2 = new Usuario(
  "Sebastian",
  "Riquelme",
  [{ title: "titel", author: "JK " }],
  ["gato", "loro"]
);

console.log(usuario2.getBookNames());
