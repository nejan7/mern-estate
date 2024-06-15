import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { response } from "express";

export const signup = async (req, res) => {
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
    res.status(500).json(error.message);
  }
  
};
