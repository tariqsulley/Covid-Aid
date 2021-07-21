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

const Users = require("./Routes/User");

app.get("/", function (req, res) {
  res.status(200).json("The server is working perfectly")
});
connectMongoDb();

app.use("/users", Users);
app.listen(8080, () => console.log("Server is running"));
