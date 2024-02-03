const mongoose = require('mongoose');

const { Schema } = mongoose;

const CategorySchema = new Schema({
  CategoryName: {
    type: String
  } 
});

const Category = mongoose.model('foodCategory', CategorySchema);

module.exports = Category;
