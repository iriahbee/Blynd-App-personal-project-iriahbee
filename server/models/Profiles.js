const mongoose = require("mongoose");
const { Schema } = mongoose;

const profileSchema = new Schema({
  email: String, 
  password: String,
  full_name: String,
  age: Number,
  gender: String,
  location: String,
  job: String,
  profile_description: String, 
  profile_photo: String, 
});

mongoose.model("profiles", profileSchema);


