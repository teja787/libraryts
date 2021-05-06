// 1. node is not only used to create web application

import { writeFile, readFile } from "fs";

// 1. write a file
const books = [
  {
    bookName: "Hamlet",
    authorName: "William Shakespear",
    isRented: false,
    dateOfRent: null,
    availableCount: 10,
    rentedBooks: 10,
    rentInfo: [{ count: 1, date: new Date() }],
  },
  {
    bookName: "Hamlet1",
    authorName: "William Shakespear",
    isRented: false,
    dateOfRent: null,
  },
];

writeFile("./books2.json", JSON.stringify(books), function (err) {
  console.log(err);
  if (!err) {
    readFile(
      "./books2.json",
      { encoding: "utf-8" },
      function (error, fileContent) {
        console.log(fileContent);
        console.log(typeof fileContent);

        const books2 = JSON.parse(fileContent);

        console.log(Array.isArray(books2));
      }
    );
  }
});

// fs.writeFileSync("./books2.json", JSON.stringify(books));
