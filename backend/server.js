require('dotenv').config();
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");



// const userRoutes = require('./routes/users.js')
// app.use('/users', userRoutes)



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// process.env.MONGODB_URL
mongoose.connect(
  // NEED THE ACTUAL MONGODB LINK
  process.env.MONGODB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error) => {
    console.log(error);
  }
);


/*mongoose.connection.on("open", () => {
  console.log("succesfully connected");
});

mongoose.connection.on("error", () => {
  console.log("there was an error");
});*/

// const BookSchema = mongoose.Schema({
//   title: "string",
//   description: "string",
//   author: "string",
// });
// const Book = mongoose.model("books", BookSchema);

app.use(express.static(path.join(__dirname, "../frontend/build")));

//  Portion used by knighthacks
// ////////////////////////////////////////////////////////////////////////////////////////
// app.post("/api", async (req, res) => {
//   const body = req.body;
//   console.log(body);
//   const book = new Book(body);
//   await book.save((error) => {
//     if (error) {
//       res.status(400);
//       res.send("Failed to add a book to the database");
//     } else {
//       res.status(200);
//       res.send("Succesfully added a book to the database");
//     }
//   });
// });

// app.get("/api", async (req, res) => {
//   const query = Book.find({});
//   await query.exec((error, books) => {
//     if (error) {
//       res.status(400);
//       res.send("Failed to find book in the database");
//     } else {
//       res.status(200);
//       res.send(books);
//     }
//   });
// });

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});

// to be deleted later
const usersRouter = require('./routes/users')
app.use('/users', usersRouter)


// const usersRouter = require('./routes/users')
// app.use('/users', usersRouter)

// working api?
const register = require('./api/register')
register.doWork(app)


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Our app is running on port ${PORT}`);
});
