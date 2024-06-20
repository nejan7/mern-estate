import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    avatar:{
      type: String,
      //profile pic
      default: "https://cdn1.iconfinder.com/data/icons/monsters-avatars/512/50_Monsters_Avatar_Icons_38-512.png"
    },
    // برای مرتب کردن زمان ایجاد کاربر بدرد میخوره
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
