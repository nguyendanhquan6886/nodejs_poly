import Book from "../model/bookmodel.js";
import { createvalidate, updatevalidate } from "../validatetion/book.js";
class BooksController {
  // Get all books
  async getAllBooks(req, res) {
    try {
      const allbook = await Book.find({});
      res.status(200).json({
        message: "Get all books successfully",
        data: allbook,
      });
    } catch (error) {
      res.send(error);
    }
  }
  async getBookdetail(req, res) {
    try {
      const book = await Book.findById(req.params.id);
      if (!book) {
        res.status(404).json({
          message: "Book not found",
        });
      } else {
        res.status(200).json(book);
      }
    } catch (error) {}
    // const book = await Book.findById(req.params.id);
    res.status(400).json({
      message: "Không tìm thấy",
    });
    // res.json(book);
  }
  async getUpdatebook(req, res) {
    try {
      const { error } = updatevalidate.validate(req.body, {
        abortEarly: false,
      });
      if (error) {
        const errors = error.details.map((err) => err.message);
        return res.status(400).json({ errors: errors });
      }
      const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!book) {
        res.status(404).json({
          message: "Book not found",
        });
      } else {
        res.status(200).json({
          message: "Update thành công",
          data: book,
        });
      }
    } catch (error) {
      res.status(400).json({
        message: "Update không thành công",
      });
    }
  }
  async getDeletebook(req, res) {
    await Book.findByIdAndDelete(req.params.id);
    res.send("Delete book successfully");
  }
  async getAddbook(req, res) {
    // res.send("Get add book");
    try {
      const { error } = createvalidate.validate(req.body, {
        abortEarly: false,
      });
      if (error) {
        const errors = error.details.map((err) => err.message);
        return res.status(400).json({ errors: errors });
      }
      await Book.create(req.body);
      // title: "Book mau",
      // description: "Sản phẩm chất lượng",
      // author: "Nguyễn Danh Quân",
      // image: "img1",
      // price: 20,
      // rate: 1,
      console.log(req.body);
      res.status(200).json({
        message: "Thêm thành công",
      });
    } catch (error) {
      res.status(400).json({
        message: "Thêm không thành công",
      });
    }
  }
}

export default BooksController;
