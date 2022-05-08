const mongoose = require ("mongoose")
const Profile = mongoose.model("profiles")
const 
  {randEmail,
  randFullName,
  randPassword,
  randGender,
  randCity,
  randCountry,
  randRole,
  randLine,
  randNumber,
  randAvatar,
  randBetweenDate}
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
      country: randCountry(),
      city: randCity(),
      profile_photo: randAvatar({ size: 200 }),
      birth_date: randBetweenDate({ from: new Date('01/01/1970'), to: new Date('31/12/2003') }),
       
    };
    const profile = await Profile.create(user);
    //console.log(profile);
  }
};

module.exports = {generateUser};
