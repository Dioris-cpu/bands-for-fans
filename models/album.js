const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const albumSchema = new Schema({
  name: String,
  released: Number,
  genre: String,
  bandId: String,
});

module.exports = mongoose.model("Album", albumSchema);
