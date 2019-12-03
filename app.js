import cors from "cors";
import express from "express";
import graphlHTTP from "express-graphql";
import schema from "./GraphQL/Schema/Schema";
import mongoose from "mongoose";mongoose.Promise = global.Promise;

// Connecting Database
mongoose.connect("mongodb://note-taking:note-taking1@ds047315.mlab.com:47315/note-taking", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


// Initialization of PORT
const app = express();
const PORT = 4300;

app.use(cors());

// Connecting GraphQL
app.use(
    "/graphql",
    graphlHTTP({
        schema: schema,
        graphiql: true
    })
)

app.get("/", (req, res) => {
    res.json({
      message: "Notetaking API v1"
    });
  });
  app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
  });