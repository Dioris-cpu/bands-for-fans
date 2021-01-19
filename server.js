const express = require('express')
const app = express()
const { graphqlHTTP } = require('express-graphql');
const mongoose = require("mongoose");
const schema = require('./schema/schema');
const cors = require('cors');

app.use(cors())

// Connect to the MongoDB cluster
mongoose.connect(
  "mongodb+srv://blackmetaliscool:blackmetaliscool@cluster0.ttlxc.mongodb.net/bands ",
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
);
mongoose.connection.once("open", () => {
  console.log("conneted to database");
});
 
app.use(
    "/graphql",
    graphqlHTTP({
      graphiql: true,
      schema,
    })
  );
 
app.listen(3000, () => console.log("Server running on localhost 3000"));