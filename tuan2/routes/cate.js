import express from "express";

const Cateroutes = express.Router();

Cateroutes.get("/", (req, res) => {
  res.send("Get all cate");
});
Cateroutes.post("/", (req, res) => {
  res.send("Add cate");
});
Cateroutes.put("/:id", (req, res) => {
  res.send(`Update product id : ${req.params.id}`);
});
Cateroutes.delete("/:id", (req, res) => {
  res.send(`Delete product id : ${req.params.id}`);
});

export default Cateroutes;
