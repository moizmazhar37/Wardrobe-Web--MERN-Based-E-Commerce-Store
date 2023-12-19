const express = require('express');
const Router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
const GetUser = require('./../Middleware')
const SECRET_KEY = "secretkeyresumes";
const Admin = require('../models/Admin');



Router.post('/Login', jsonParser, async (Req, Res) => {
  try {
      let UserFound = await Admin.findOne({ email: Req.body.email});

      if (!UserFound) {
          return Res.status(400).json({ Success: false, Error: "Enter Correct Email/Password" });
      }

      const ComparePassword = await bcrypt.compare(Req.body.password , UserFound.password);
      if (!ComparePassword)
      {
          return Res.status(400).json({ Success: false , Error: "Enter Correct Email/Password"});     
      }

      const Data = { user: { id: UserFound.id } };
      const AuthToken = jwt.sign(Data, SECRET_KEY);

      UserFound = await Admin.findOne({ email: Req.body.email}).select("-password")

      Res.json({ Success: true, AuthToken: AuthToken , User: UserFound });
  } catch (error) {
      return Res.status(400).json({ Error: "An Error Occured" });
  }
});

Router.post('/Register', jsonParser, async (Req, Res) => {
    try 
    {
        const Salt = await bcrypt.genSalt(10);
        Req.body.password = await bcrypt.hash(Req.body.password, Salt);

        const SaveAdmin = new Admin({
          name: Req.body.name,
          email: Req.body.email,
          password: Req.body.password,
        })
        const AddedAdmin = await SaveAdmin.save();
        Res.status(200).send({ Success: true , AddedAdmin });
    } catch (error) {
        Res.status(404).json({ Error: error });
    }
});




module.exports = Router;
