const mongoose = require('mongoose')

const roomSchema = mongoose.Schema({
    name: { type: String },
    description: { type: String },
    imageUrl: { type: String },
    reviews: [],
  });
  
  module.exports = mongoose.modelNames('Room', roomSchema) 