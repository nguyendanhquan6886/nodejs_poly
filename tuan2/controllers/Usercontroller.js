import User from "../model/usermodel.js";
import bcryptjs from "bcryptjs";
import { registervalidate, loginvalidate } from "../validatetion/auth.js";
import jwt from "jsonwebtoken";
class Authcontroller {
  //Đăng Ký
  async register(req, res) {
    try {
      // validation register
      const { error } = registervalidate.validate(req.body, {
        abortEarly: false,
      });
      console.log(error);
      if (error) {
        const errors = error.details.map((err) => err.message);

        return res.status(400).json({
          message: errors,
        });
      }

      // check email
      const { username, email, password } = req.body;

      const checkemail = await User.findOne({ email });
      if (checkemail) {
        return res.status(400).json({
          message: "Email đã được dùng",
        });
      }
      // const { username, email, password } = req.body;
      // const salt = bcryptjs.genSaltSync(10);
      console.log(req.body);
      const hashpassword = await bcryptjs.hash(password, 10);

      const user = await User.create({
        username,
        email,
        password: hashpassword,
      });
      console.log(user);
      res.status(200).json({
        message: "Regisster succesfully ",

        data: { ...user.toObject(), password: undefined },
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
  async login(req, res) {
    try {
      const { error } = loginvalidate.validate(req.body, { abortEarly: false });

      if (error) {
        const errors = error.details.map((err) => err.message);
        return res.status(400).json({
          message: errors,
        });
      }

      const { email, password } = req.body;
      // check tai khoan
      const checkuser = await User.findOne({ email });

      if (!checkuser) {
        return res.status(400).json({
          message: "Tài Khoản không chính xác",
        });
      }

      // check password

      const checkpassword = await bcryptjs.compare(
        password,
        checkuser.password
      );
      if (!checkpassword) {
        return res.status(400).json({
          message: "Mật khẩu không đúng",
        });
      }
      const token = jwt.sign({ id: checkuser._id }, "key", {
        expiresIn: "2d",
      });
      res.status(200).json({
        message: "Login success",
        data: { ...checkuser.toObject(), token, password: undefined },
      });
    } catch (error) {
      res.status(400).json({
        message: error,
      });
    }
  }
}

export default Authcontroller;
