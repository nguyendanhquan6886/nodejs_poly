import { Router } from "express";
import Authcontroller from "../controllers/Usercontroller.js";
const Authrouter = Router();
const User = new Authcontroller();
Authrouter.post("/register", User.register);
Authrouter.post("/login", User.login);

export default Authrouter;
