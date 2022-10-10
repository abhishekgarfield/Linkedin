var express = require("express");
var cors = require("cors");
var app = express();
var bcrypt = require("bcrypt");
const { v4 } = require("uuid");
app.use(express.json());
const jwt = require("jsonwebtoken");
app.use(cors());
require("dotenv").config();
var MongoClient = require("mongodb").MongoClient;
var uri = process.env.uri;
const port = process.env.Port;

app.post("/signup", async (req, res) => {
  console.log("signup");
  const { user } = req.body;
  console.log(user);
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const database = client.db("app-data");
    const collection = await database.collection("users");
    const user_id = v4();
    const sentitizedEmail = user.email.toLowerCase();
    const hashedpassword = await bcrypt.hash(user.password, 10);
    const filtereduser = {
      name: user.name,
      user_id: user_id,
      password: hashedpassword,
      email: sentitizedEmail,
      profile_pic: user.url,
    };
    const resp = await collection.findOne({ email: sentitizedEmail });
    if (resp) {
      return res.status(403).json({ error: "User already exists !" });
    } else {
      const result = await collection.insertOne(filtereduser);
      const token = jwt.sign(result, user.email, {
        expiresIn: 60 * 24,
      });
      console.log(result);
      res.status(200).json({ token: token, user_id: user_id });
    }
  } catch (err) {
    console.log(err);
  } finally {
    client.close();
  }
});

app.post("/login", async (req, res) => {
  console.log("login");
  const { user } = req.body;
  console.log(user);
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const database = client.db("app-data");
    const collection = await database.collection("users");

    const sentitizedEmail = user.email.toLowerCase();

    const resp = await collection.findOne({ email: sentitizedEmail });
    if (resp) {
      const checkPassword = await bcrypt.compare(user.password, resp.password);
      if (checkPassword) {
        const token = jwt.sign(resp, user.email, {
          expiresIn: 60 * 24,
        });
        return res.status(200).json({ token: token, user_id: resp.user_id });
      } else {
        return res.status(403).json({ error: "Password is incorrect !" });
      }
    } else {
      res.status(403).json({ error: "User doesnt Exist , please sign up !" });
    }
  } catch (err) {
    console.log(err);
  } finally {
    client.close();
  }
});

app.post("/addpost" ,async(req,res)=>{
    console.log("addpost");
    const { post } = req.body;
    console.log(post);
    const client = new MongoClient(uri);
    const post_id=v4();
    post.post_id=post_id
    try {
      await client.connect();
      const database = client.db("app-data");
      const collection = await database.collection("posts");
      const resp=collection.insertOne(post);
      res.send(resp);
      console.log(resp);
    }catch(err)
    {
        console.log(err);
    }
})

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});