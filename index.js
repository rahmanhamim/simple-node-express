const express = require("express");
var cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
 res.send(
  "WOW! I am excited to learning Node and Express with nodemon automatic restart"
 );
});

const users = [
 { id: 0, name: "Shabana", email: "shabana@gmail.com", phone: "01788888888" },
 {
  id: 1,
  name: "Sharbonti",
  email: "shrabonti@gmail.com",
  phone: "01788888888",
 },
 { id: 2, name: "Shabnoor", email: "shabnoor@gmail.com", phone: "01788888888" },
 { id: 3, name: "Soniya", email: "soniya@gmail.com", phone: "01788888888" },
 { id: 4, name: "Sushmita", email: "sushmita@gmail.com", phone: "01788888888" },
];

app.get("/users", (req, res) => {
 const search = req.query.search;
 // use query parameter
 if (search) {
  const searchResult = users.filter((user) =>
   user.name.toLocaleLowerCase().includes(search)
  );
  res.send(searchResult);
 } else {
  res.send(users);
 }
});

// app.METHOD
app.post("/users", (req, res) => {
 const newUser = req.body;
 newUser.id = users.length;
 users.push(newUser);
 console.log("hitting the post", req.body);
 // res.send(JSON.stringify(newUser));
 res.json(newUser);
});

// dynamic parameter
app.get("/users/:id", (req, res) => {
 const id = req.params.id;
 const user = users[id];
 res.send(user);
});

app.get("/fruits", (req, res) => {
 res.send(["mango", "oranges", "banana", "apple"]);
});

app.get("/fruits/mangoes/fazli", (req, res) => {
 res.send("Yummy Yummy tok marka fazli");
});

app.listen(port, () => {
 console.log("listening to port", port);
});
