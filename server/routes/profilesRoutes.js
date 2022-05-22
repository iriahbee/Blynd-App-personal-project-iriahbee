const mongoose = require("mongoose");
const Users = mongoose.model("profiles");
const cors = require('cors')



const profileRoutes = (app) => {
  app.get(`/users`, async (req, res) => {
    const User = await Users.find();
    res.setHeader('Content-Type', 'application/json');
    return res.status(200).send(JSON.stringify(User));
  });

  app.post(`/user`, cors(), async (req, res) => {
    const User = await Users.create(req.body);
     console.log(User)
    return res.status(201).send({
      error: false,
      User,
    });
  });

  app.post("/Login",cors(), async (req,res)=>{
    const {email,password} =req.body;
    Users.findOne({email:email},(err,user)=>{
        if(user){
           if(password === user.password){
               res.send({message:"login sucess",user:user})
           }else{
               res.send({message:"wrong credentials"})
           }
        }else{
            res.send("not register")
        }
    })
});

  app.put(`/api/profile/:id`, async (req, res) => {
    const { id } = req.params;

    const profile = await Profile.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      profile,
    });
  });

  app.delete(`/api/profile/:id`, async (req, res) => {
    const { id } = req.params;

    const profile = await Profile.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      profile,
    });
  });
};

module.exports = profileRoutes;
