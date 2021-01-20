const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bandsSchema = new Schema({
    name: String,
    genre: String,
    orgin: String,
    formed: Number,



})

module.exports = mongoose.model('Band', bandsSchema);