import express from "express";

import Productcontroller from "../controllers/product.js";
const routerproduct = express.Router();
const controllers = new Productcontroller();

routerproduct.get("/", controllers.getAll);
routerproduct.get("/:id", controllers.getdetail);
routerproduct.post("/", controllers.Add);
routerproduct.delete("/:id", controllers.delete);
routerproduct.put("/:id", controllers.update);

export default routerproduct;
