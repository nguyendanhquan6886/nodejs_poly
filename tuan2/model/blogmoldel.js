import mongoose from "mongoose";
const Schema = mongoose.Schema;
const BlogSchema = new Schema(
  {
    blog_name: { type: String },
    rate: { type: Number },
    active: { type: Boolean },
    img: { type: String },
  },
  { timestamps: true, versionKey: false }
);

const Blog = mongoose.model("Blog", BlogSchema);

export default Blog;
