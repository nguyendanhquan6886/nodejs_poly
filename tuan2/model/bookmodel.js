import mongoose from "mongoose";
const Schema = mongoose.Schema;

const BookSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    author: { type: String },
    image: { type: String },
    price: { type: Number },
    rate: { type: Number },
  },
  { timestamps: true, versionKey: false }
);

const Book = mongoose.model("Book", BookSchema);

export default Book;
