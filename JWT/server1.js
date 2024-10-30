import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

const app = express();
app.use(express.json());
dotenv.config();
const posts = [
  {
    name: "CBIT",
    title: "Welcome to CBIT",
  },
  {
    name: "MGIT",
    title: "Welcome to MGIT",
  },
];

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.Secret_key, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }
    req.user = user;
    next();
  });
};

app.post("/login", (req, res) => {
  const username = req.body.username;
  const user = { name: username };
  const accessToken = jwt.sign(user, process.env.Secret_key);
  res.json({ accessTokenis: accessToken });
});

app.use(authenticateToken);

app.get("/posts", (req, res) => {
  console.log(req.user.name);
  res.json(posts.filter((post) => post.name === req.user.name));
});

app.listen(8000, () => {
  console.log("Server one has  started");
});
