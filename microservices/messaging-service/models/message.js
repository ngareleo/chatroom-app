const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MessageSchema = new Schema({
  content: String,
  user: String,
  dateSent: Date,
})

module.exports = mongoose.model('Message', MessageSchema)
