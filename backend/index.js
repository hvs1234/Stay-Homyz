import express from "express";
import "./db/config.js";
import User from "./db/User.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.post("/register", async (req, res) => {
  let user = await User(req.body);
  let result = await user.save();
  res.send(result);
});

app.post("/login", async (req, res) => {
  if (req.body.email && req.body.newpassword) {
    let user = await User.findOne(req.body).select([
      "-newpassword",
      "-confirmpassword",
    ]);
    if (user) {
      res.send(user);
    } else {
      res.send(JSON.stringify("No user found"));
    }
  } else {
    res.send(JSON.stringify("No user found"));
  }
});

app.listen(4600);
