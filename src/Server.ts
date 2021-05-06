import express from "express";
// rest of the code remains same
import { libInstance } from "./main";
import cors from "cors";
import bodyParser from "body-parser";
const app = express();
const PORT = 8000;
app.use(cors());
// app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});

app.post("/addBook", (req, res) => {
  const book = req.body;
  console.log(book);
  const addBook = libInstance.addBook(book);
  res.send("Book Added");
});

app.get("/booksList", (req, res) => {
  const searchString = req.query["searchString"] as string;
  console.log(searchString);
  if (!searchString) {
    res.send(libInstance.getAllBooks());
    return;
  }
  const addedBook = libInstance.searchBooks(searchString);
  res.send(addedBook);
});
app.get("/searchBook", (req, res) => {
  const searchString = req.query["searchString"] as string;
  console.log(searchString);
  const book = libInstance.searchBooks(searchString?.toLocaleLowerCase());
  // read about optional chaining in js

  res.send(book);
});

app.get("/buyBook", (req, res) => {
  const buyingBook = req.query["buyingBook"] as string;
  console.log(typeof req, "request");
  console.log(buyingBook, "--");
  const bBook = libInstance.buyBook(parseInt(buyingBook));
  console.log(bBook);
  res.send(bBook);
});
