const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bandsSchema = new Schema({
    name: String,
    genre: String,
    formed: Number,
    orgin: String,



})

module.exports = mongoose.model('Band', bandsSchema);