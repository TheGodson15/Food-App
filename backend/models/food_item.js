const mongoose = require('mongoose');

const { Schema } = mongoose;

const FoodItemSchema = new Schema({
  CategoryName: {
    type: String,
    required: true
  }, 
  name: {
    type: String,
    required: true
  },  
  img: {
    type: String,
    required: true
  }, 
  options:[{
    varient:{
      varientname: String,
      varientprice: Number
    }
  }],
  description: {
    type: String,
    required: true
  }
});

const FoodItem = mongoose.model('fooditem', FoodItemSchema);

module.exports = FoodItem;
