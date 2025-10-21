const User = require('../models/User');

const createUser = async (req, res) => {
  try {
    console.log("Received body:", req.body); // 🔍 debug
    const { username, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create and save new user
    const user = new User({ username, email, password });
    await user.save();
    res.redirect('/dashboard.html');
  } catch (error) {
    console.log("There is an error: ", error);
    res.status(500).json({ message: 'Server Error' });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.log("There is an error: ", error);
    res.status(500).json({ message: "Server Error" });
  }
};

const loginInfo = async (req,res)=>{
  try{
      const {email,password} = req.body;
      const existingUser = await User.findOne({email});
      if(!existingUser) {
        return res.status(400).json({message: "The Email is not existing , please signup first"});
      }
      if(existingUser.password!== password) {
        return res.status(400).json({message: "Incorrect password for your email id"});
      }
      res.redirect('/dashboard.html');
  }

        catch (err) {
          console.log("Login Error:", err);
          res.status(500).send('Server Error');
      }
}
module.exports = { createUser, getUsers , loginInfo };
