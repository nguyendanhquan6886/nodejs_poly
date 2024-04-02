import jwt from "jsonwebtoken";
import User from "../model/usermodel.js";

const checkPermission = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({
        message: "Bạn chưa đăng nhập!",
      });
    }
    // verify token
    const data = jwt.verify(token, "key");
    if (!data) {
      return res.status(401).json({
        message: "No Authorization",
      });
    }

    // check user
    const user = await User.findById(data.id);

    if (!user) {
      return res.status(404).json({
        message: "Bạn chưa đăng nhập",
      });
    }

    next();
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
export default checkPermission;
