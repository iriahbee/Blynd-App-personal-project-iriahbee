const mongoose = require("mongoose");
const { Schema } = mongoose;

const AppConfigSchema = new Schema({
  type: { type: Schema.Types.Mixed },
  key: { type: String, required: true, unique: true },
  value: { type: Schema.Types.Mixed }
});

const profileSchema = new Schema({
  email: String, 
  password: String,
  phoneNo: { type: String },
  full_name: String,
  birth_date: { type: String },
  age: Number,
  gender: { type: String, enum: ['Male', 'Female', 'Others'] },
  country: String,
  city:String,
  longitude: Number,
  latitude: Number,
  job: { type: String, default: null },
  profile_description: String,
  interest: String, 
  profile_photo:  { type: String, default: null },
  pictures: { type: [String] },
  pictures_ids: { type: [String] },
  show_profile_photo: { type: Boolean, default: false },
  role: { type: String, default: 'User' },
  active: { type: Boolean, default: true },
  created_at: { type: Date },
  daily_swipe_count: { type: Number, default: 0 },
  deleted: { type: Boolean, default: false },
  updated_at: { type: Date },
  notify_matches: { type: Boolean, default: true },
  notify_messages: { type: Boolean, default: true },
  search_distance: { type: Number, default: 100.0 },
  preference: String,
  show_male: { type: Boolean, default: true },
  show_female: { type: Boolean, default: true },
  reports: { type: String },
  reported_by: { type: String },
  unmatch: { type: String },
  unmatched_by: { type: String },
  sent_messages: { type: String },
  received_messages: { type: String }
});

// const MatchSchema = new Schema({
//   userId: { type: Schema.Types.ObjectId, ref: 'User', required: true } ,
//   targetId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
//   isLiked: { type: Boolean, default: true },
//   createdAt: { type: Date },
//   updatedAt: { type: Date }
// });

// const messageSchema = new Schema({
//   text: { type: String, default: '' },
//   createdAt: { type: Date, default: Date.now },
//   isUnRead: { type: Boolean, default: true },
//   senderID: { type: Schema.Types.ObjectId, ref: 'User', required: true },
//   receiverID: { type: Schema.Types.ObjectId, ref: 'User', required: true }
// });

// const otpSchema = new Schema({
//   phoneNo: { type: String },
//   otp: { type: String }
// });

// const reportSchema = new Schema({
//   userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
//   targetId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
//   reason: { type: String, default: '' },
//   createdAt: { type: Date },
//   updatedAt: { type: Date }
// });

// const unMatchSchema = new Schema({
//   userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
//   targetId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
//   reason: { type: String, default: '' },
//   createdAt: { type: Date },
//   updatedAt: { type: Date }
// });

// const voteSchema = new Schema({
//   userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
//   targetId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
//   isLiked: { type: Boolean },
//   isNewMatch: { type: Boolean, default: true },
//   createdAt: { type: Date },
//   updatedAt: { type: Date }
// });



mongoose.model("profiles", profileSchema);


