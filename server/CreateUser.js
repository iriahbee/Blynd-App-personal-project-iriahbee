const mongoose = require ("mongoose")
const Profile = mongoose.model("profiles")
const 
  {randEmail,
  randFullName,
  randPassword,
  randGender,
  randCity,
  randRole,
  randLine,
  randNumber,
  randAvatar}
 = require ("@ngneat/falso");

const generateUser = async () => {
  for (let u = 0; u < 10; u++) {
    const user = {
      email: randEmail(),
      password: randPassword(),
      full_name: randFullName(),
      age: randNumber({ min: 18, max: 40 }),
      gender: randGender(),
      job: randRole(),
      profile_description: randLine({ lineCount: 8 }),
      location: randCity(),
      profile_photo: randAvatar({ size: 200 }),
    };
    const profile = await Profile.create(user);
    console.log(profile);
  }
};

module.exports = {generateUser};
