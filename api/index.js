import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from './routes/user.route.js';
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

app.listen(3000, () => {
  console.log("server is running on port 3000!");
});

//create API route -- rec for client and res for server
//http://localhost:3000/api/user/test  ----for test
//userRouter یعنی تمام مسیر ها رو چک کن 
app.use("/api/user", userRouter);