import routerBook from "./books.js";
import Cateroutes from "./cate.js";
import routerproduct from "./product.js";
const routes = function (app) {
  app.get("/", (req, res, next) => {
    res.send("home");
  });
  app.use("/books", routerBook);

  app.use("/cates", Cateroutes);
  app.use("/products", routerproduct);
};

export default routes;
