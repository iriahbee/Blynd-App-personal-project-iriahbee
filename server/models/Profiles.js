const mongoose = require("mongoose");
const { Schema } = mongoose;

const usersSchema = new Schema({
  email: String, 
  password: String,
  phoneNo:  String ,
  full_name: String,
  birth_date: String ,
  gender: String,
  country: String,
  city:String,
  job:  String,
  profile_description: String,
  interest: [String], 
  profile_photo: String,
  search_distance: String,
  preference: String, 
});




mongoose.model("profiles", usersSchema);


