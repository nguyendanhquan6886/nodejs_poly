// Cách tạo server
// const http = require('http');

// server = http.createServer(()=>{
//     console.log('Xin chào các bạn!');
// })

// server.listen(3000)

// Tạo server bằng express

const express = require("express");
const app = express();
const port = 3000;
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));
// router
const multer = require("multer");
//khai báo sử dụng multer
// SET STORAGE
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/img/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
var upload = multer({ storage: storage });

app.get("/", function (req, res, next) {
  console.log("Home");
  let today = new Date();
  let result = today.getDay();
  console.log(result);
  var day;
  switch (result) {
    case 1:
      day = "Thứ hai";
      break;
    case 2:
      day = "Thứ ba";
      break;
    case 3:
      day = "Thứ tư";
      break;
    case 4:
      day = "Thứ năm";
      break;
    case 5:
      day = "Thứ sáu";
      break;
    case 6:
      day = "Thứ bảy";
      break;
    case 7:
      day = "Chủ nhật";
      break;

    default:
      console.log("Đang xảy ra lỗi");
      break;
  }
  res.render("home", { kingofday: day });
});
app.get("/product", function (req, res, next) {
  console.log("product");
  res.send("<p>Đây là trang admin</p>");
});
var listProduct = [
  {
    id: 1,
    title: "Apple Book",
    price: 3000,
    description:
      "A very interesting book about so many even more interesting things!",
    imageURL: "book.jpg",
  },
  {
    id: 2,
    title: "Microsoft Book",
    price: 2000,
    description:
      "A very interesting book about so many even more interesting things!",
    imageURL: "book.jpg",
  },
  {
    id: 3,
    title: "VFast Book",
    price: 1000,
    description:
      "A very interesting book about so many even more interesting things!",
    imageURL: "book.jpg",
  },
];
app.get("/shop", function (req, res, next) {
  res.render("shop", { products: listProduct });
});
app.get("/addnew", function (req, res, next) {
  res.render("add", { products: listProduct });
});
app.get("/product/:id", function (req, res, next) {
  console.log("Chi tiết sản phẩm");
  const id = req.params.id;
  const item = listProduct.find((e) => e.id == id);
  // res.send(`<p>Đây là trang chi tiết sản phẩm id là: ${req.params.id} </p>`);
  res.render("proinfor", { pro: item });
});
app.post("/addnew", upload.single("image"), (req, res) => {
  const file = req.file;
  // console.log();
  let name = req.body.title;
  let price = req.body.price;
  let des = req.body.description;
  let img = file.filename;
  console.log(img);
  // thêm sản phẩm vào cuối mảng
  listProduct.push({
    id: listProduct.length + 1,
    title: name,
    price: price,
    description: des,
    imageURL: img,
  });

  res.redirect("/shop");
});
app.listen(port, () => {
  console.log(`server đang chạy cổng : ${port}`);
});
