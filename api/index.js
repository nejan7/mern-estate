import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
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
