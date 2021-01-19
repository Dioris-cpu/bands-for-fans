const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const albumSchema = new Schema({
  name: String,
  released: String,
  genre: String,
  bandId: String,
});

module.exports = mongoose.model("Album", albumSchema);
