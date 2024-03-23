import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ProductSchema = new Schema({
  pro_name: { type: String },
  pro_img: { type: String },
  pro_rate: { type: Number },
  pro_active: { type: Boolean },
});
const Product = mongoose.model("Product", ProductSchema);

export default Product;
