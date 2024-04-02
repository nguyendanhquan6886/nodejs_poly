import express from "express";
import routes from "./routes/index.js";
import connectMongoDB from "./config/dbconfig.js";
import dotenv from "dotenv";
const app = express();
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
const port = process.env.PORT || 3000;
const dbUrl = "mongodb://127.0.0.1:27017/book";
connectMongoDB(dbUrl);
routes(app);

app.listen(port, () => console.log(`Đang chạy cổng ${port}`));
