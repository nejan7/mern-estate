import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  //send data to database with json-insomnia
  const { username, email, password } = req.body;
  //for hash
  const hashedPassword = bcryptjs.hashSync(password, 10);
  //reUSE user model
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    //201 means something is created.
    res.status(201).json("user created successfully !");
  } catch (error) {
    next(error); //in index.js control all
  }
};
// for sign in =========================
export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, "User not found!"));
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, "Wrong credentials!"));
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET); //process.env.JWT_SECRET random that mix with id
    const { password: pass, ...rest } = validUser._doc; //dont send pass - use in because password is const and cant use directly
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest); //dont send pass
    }
    catch (error) {
    next(error);
  }
};
