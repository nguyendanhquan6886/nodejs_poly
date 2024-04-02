import express from "express";
import BooksController from "../controllers/book.js";
import checkPermission from "../middlewears/authenticate.js";
const routerBook = express.Router();
const booksController = new BooksController();
routerBook.get("/", booksController.getAllBooks);
routerBook.post("/", checkPermission, booksController.getAddbook);
routerBook.get("/:id", booksController.getBookdetail);
routerBook.put("/:id", checkPermission, booksController.getUpdatebook);
routerBook.delete("/:id", checkPermission, booksController.getDeletebook);

export default routerBook;
