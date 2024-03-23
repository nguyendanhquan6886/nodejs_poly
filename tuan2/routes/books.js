import express from "express";
import BooksController from "../controllers/book.js";
const routerBook = express.Router();
const booksController = new BooksController();
routerBook.get("/", booksController.getAllBooks);
routerBook.post("/", booksController.getAddbook);
routerBook.get("/:id", booksController.getBookdetail);
routerBook.put("/:id", booksController.getUpdatebook);
routerBook.delete("/:id", booksController.getDeletebook);

export default routerBook;
