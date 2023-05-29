import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    unique: [true, "This e-mail is already in use"], 
    required: [true, "E-mail is required"], 
  },
  username: {
    type: String,
    unique: [true, "Username already exists"],
    required: [true, "Please insert username"], 
    match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
  },
  image: {
    type: String
  }
});

const User = models.User || model("User", userSchema)

export default User