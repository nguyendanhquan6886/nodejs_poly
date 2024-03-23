import mongoose from "mongoose";
const Schema = mongoose.Schema;
const CateSchema = new Schema(
  {
    cate_name: { type: string },
    description: { type: string },
  },
  { timestamps: true, versionKey: false }
);

const Cate = mongoose.model("Cate", CateSchema);

export default Cate;
