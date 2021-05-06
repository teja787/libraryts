import { libInstance } from "./main";
import { IBook } from "./types";
/**
 *write custom find and filter function for array.
 * 1. book id is greater than 1.
 * 2. book name has more than 10 characters.
 *
 */

const customFilter = (books: any[], predicate: (book: IBook) => boolean) => {
  let filteredBooks = [];
  for (let i = 0; i < books.length; i++) {
    if (predicate(books[i])) {
      filteredBooks.push(books[i]);
    }
  }
  return filteredBooks;
};
// console.log(
//   customFilter(libInstance.books, (books) => (books.id as number) > 1)
// );
const tempBooks = customFilter(
  libInstance.books,
  (books) => books.bookName.length > 10
);
// console.log(tempBooks);
// console.log(
//   customFilter(
//     libInstance.books,
//     (books) => (books.availableCount as number) > 5
//   )
// );
// filter(libInstance.books);
// console.log(
//   libInstance.books.filter((book) => {
//     return (book.id as number) > 1;
//   })
// );

const customFind = (books: IBook[], predicate: (book: IBook) => boolean) => {
  for (let i = 0; i < books.length; i++) {
    if (predicate(books[i])) {
      return books[i];
    }
  }
};

console.log(customFind(libInstance.books, (book) => (book.id as number) > 1));
