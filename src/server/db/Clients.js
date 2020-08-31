const mongoose = require('mongoose')
const Schema = mongoose.Schema

const client = new Schema({
      name: String,
      surName: String,
      email: String,
      firstContact: Date,
      emailType: String,
      sold: Boolean,
      owner: String,
      country: String
})


const Client = mongoose.model('client', client)
module.exports = Client
