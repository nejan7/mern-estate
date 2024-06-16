import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { response } from "express";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  //send data to database with json-insomnia
  const { username, email, password } = req.body;
  //for hash 
  const hashedPassword = bcryptjs.hashSync(password,10);
  //reUSE user model
  const newUser = new User({ username, email, password:hashedPassword });
  try{
      await newUser.save();
        //201 means something is created.
        res.status(201).json("user created successfully");
  }
  catch(error){
    next(error); //in index.js control all 
  }
  
};
