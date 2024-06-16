import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import 'dotenv/config'

dotenv.config(); //پسورد رو بردم توی دات انو

// اگه پایگاه داده وصل شد یپام بده اگه نه ارور بده
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected To MongoDB!");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
//let json send server to server (tested in insomnia ) 
app.use(express.json());

const port = process.env.APP_PORT || 4000; // APP_PORT instead of APP_POST
app.listen(port, () => { //route
  console.log(`server is running on port ${port}!`); //end point
});

//create API route -- rec for client and res for server
//http://localhost:3000/api/user/test  ----for test
//userRouter یعنی تمام مسیر ها رو چک کن 
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
//middleware to handle errors
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode, //ER6 standart - dont use statusCode:statusCode
    message,
  });
});
