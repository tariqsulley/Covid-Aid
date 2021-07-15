const express = require("express");
const app = express();
const mongoose = require("mongoose");
const uri =
  "mongodb+srv://Prince:Prince@cluster0.kresb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
app.use(express.json());
connection = mongoose.connection
let connectMongoDb = async () => {
  try {
    mongoose
      .connect(uri, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .catch((err) => {
        console.log(`Failed to connect to database: ${err}`);
      });
    connection.once("open", () => console.log("Connected successfully to db"));
    connection.on("error", (err) => console.log(`Error: ${err}`));
  } catch (err) {
    console.log(`Error: ${err}`);
  }
};

var covid_data = [];
const Users = require("./Routes/User");
// app.get("/", function (req, res) {
//   res.send(covid_data);
// });

app.use("users", Users);
connectMongoDb();
app.listen(8080, () => console.log("Server is running"));
