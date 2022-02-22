const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const authenticate = require("../middleware/authenticate");
require("../db/conn");
const User = require("../model/userSchema");
const cookieParser = require("cookie-parser");

router.use(cookieParser());

// with promices

/*router.post('/register', (req, res) => {

    const { name, email, phone, work, password, cpassword } = req.body;

    if (!name || !email || !phone || !work || !password || !cpassword) {

        return res.status(422).json({ error: "Plz field the properly" });
    }

    User.findOne({ email: email })
        .then((userExist) => {
            if (userExist) {
                return res.status(422).json({ error: "Email Already Exist" });
            }


            const user = new User({ name, email, phone, work, password, cpassword });

            user.save().then(() => {
                res.status(201).json({ message: "user registerd successfully" });

            }).catch((err) => res.status(500).json({ error: "Faild to registered" }));

        }).catch(err => { console.log(err); });

});*/

// with async-wait

router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "Plz field the properly" });
  }

  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ error: "Email Already Exist" });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "Password are not Matching" });
    } else {
      const user = new User({ name, email, phone, work, password, cpassword });
      //hash function
      await user.save();

      res.status(201).json({ message: "user registerd successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

//login route

router.post("/signin", async (req, res) => {
  // console.log(req.body);
  //res.json({message: "nice"});

  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "please fill the data" });
    }
    const userLogin = await User.findOne({ email: email });

    //console.log(userLogin);

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      const token = await userLogin.generateAutoToken();
      console.log(token);

      //cookies

      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 2589200000),
        httpOnly: true,
      });

      if (!isMatch) {
        res.status(400).json({ error: " 1 Invalid Credientials" });
      } else {
        res.json({ message: " user login WELCOME" });
      }
    } else {
      res.status(400).json({ error: "Invalid Credientials pass" });
    }
  } catch (err) {
    console.log(err);
  }
});
//
//about us page

router.get("/about", authenticate, (req, res) => {
  //   console.log(`helloo my about`);
  res.send(req.rootUser);
});
// det data dta for hme and contact
router.get("/getdata", authenticate, (req, res) => {
  //   console.log(`helloo my about`);
  res.send(req.rootUser);
});

//contact page
router.post("/contact", authenticate, async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
      console.log("error in contact form");
      return res.status(400).json({ error: "Please Fill the Form" });
    }
    const userContact = await User.findOne({ _id: req.userID });

    if (userContact) {
      const userMessage = await userContact.addMessage(
        name,
        email,
        phone,
        message
      );
      await userContact.save();
      console.log("Message Send");
      return res
        .status(201)
        .json({ message: "user contact submitted successfully " });
    }
  } catch (error) {
    console.log(error);
  }
});

//logout us page

router.get("/logout", (req, res) => {
  console.log(`helloo my logout`);
  res.clearCookie("jwtoken", { path: "/" });
  res.status(200).send("User logout");
});

module.exports = router;
