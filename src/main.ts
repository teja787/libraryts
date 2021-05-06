// 1. search for required book
// 2. rent a book
// 3. buy a book
// 4. return books
// 5. add new books

// const bookObj = {"bookname":"Hamlet","authorName": "William Shakespear", "isRented": false, "dateOfRent": null,}
// FS MODULE
// name:"elequent js", author ="Marijn Haverbeke"
import fs from "fs";
import { IBook } from "./types";
// super-set
// [-Infinity, Infinity] => super-set
// [0,1,2,..1000] => sub-set
class Library {
  books: IBook[] = [];
  constructor() {
    const fileContent = fs.readFileSync("./books.json", { encoding: "utf-8" });
    const bookFile = JSON.parse(fileContent);
    this.books.push(...bookFile);
  }

  storeBooks() {
    fs.writeFileSync("./books.json", JSON.stringify(this.books));
  }

  searchBooks(searchString: string) {
    const search = this.books.filter(
      (book) =>
        book.bookName
          .toLowerCase()
          .includes(searchString.toLowerCase().trim()) ||
        book.authorName
          .toLowerCase()
          .includes(searchString.toLowerCase().trim())
    );
    return search;
  }

  rentBook(rentBookId: number) {
    const rent = this.books.find((book) => book.id === rentBookId);
    console.log(rent);
    if (!rent) {
      throw new Error("book not found");
    } else {
      rent.availableCount = rent.availableCount - 1;
      rent.rentedBookCount = rent.rentedBookCount + 1;
      this.storeBooks();
    }
    return rent;
  }
  buyBook(bookIdToBuy: number) {
    const buy = this.books.find((book) => book.id === bookIdToBuy);
    if (!buy) {
      throw new Error("Book not found");
    } else if (buy.availableCount > 0) {
      buy.availableCount--;
      this.storeBooks();
    } else {
      console.log("Book is out of stock");
    }
    return buy;
  }
  returnBook(bookId: number) {
    const bookVerification = this.books.find((book) => book.id === bookId);
    if (!bookVerification) {
      throw new Error("not submitting relevant book");
    } else {
      bookVerification.availableCount++;
      bookVerification.rentedBookCount--;
      this.storeBooks();
    }
    return bookVerification;
  }
  getAllBooks() {
    return this.books;
  }
  addBook(newBook: IBook) {
    const add = this.books.find(
      (book) =>
        book.bookName.toLowerCase() === newBook.bookName.toLowerCase().trim()
    );
    if (add) {
      console.log("book is already present");
    } else {
      newBook.id = this.books.length + 1;
      this.books.push(newBook);
      this.storeBooks();
    }
    return this.books;
  }
}
export const libInstance = new Library();
// console.log(
//   newObj.addBook({
//     bookName: "elequent js",
//     authorName: "Marijn Haverbeke",
//     availableCount: 10,
//     rentInfo: [],
//     rentedBookCount: 0,
//   })
// );
// console.table(newObj.searchBooks("eleq"));
// console.log(newObj.rentBook(1));
// console.log(newObj.returnBook(1));
// console.log(newObj.buyBook(1));
//DRY => don't repeat yourself
