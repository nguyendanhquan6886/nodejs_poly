import Product from "../model/product.js";

class Productcontroller {
  async getAll(req, res) {
    try {
      const data = await Product.find({});
      res.status(200).json({
        message: "Get all successfully",
        data: data,
      });
    } catch (error) {
      res.send(error);
    }
  }

  async getdetail(req, res) {
    try {
      const productdetail = await Product.findById(req.params.id);
      if (!productdetail) {
        res.status(404).json({
          message: "Product not found",
        });
      } else {
        res.status(200).json({
          message: "Get detail successfully",
          data: productdetail,
        });
      }
    } catch (error) {
      res.send(error);
    }
  }

  async update(req, res) {
    const productupdate = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    const data = await Product.find({});
    if (!productupdate) {
      res.status(404).json({
        message: "Not Found",
      });
    } else {
      res.status(200).json({
        message: "Update successfully",
        data: data,
      });
    }
  }

  async delete(req, res) {
    try {
      const productdelete = await Product.findByIdAndDelete(req.params.id);

      if (!productdelete) {
        res.status(404).json({
          message: "Not found",
        });
      } else {
        res.status(200).json({
          message: "Delete successfully",
        });
      }
    } catch (error) {
      res.status(400).json({ message: "Error" });
    }
  }

  async Add(req, res) {
    try {
      await Product.create(req.body);
      res.status(200).json({
        message: "Add successfully",
      });
    } catch (error) {
      res.status(400).json({
        message: "Error",
      });
    }
  }
}

export default Productcontroller;
