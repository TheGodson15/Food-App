const mongoose = require('mongoose');

const { Schema } = mongoose;

const FoodItemSchema = new Schema({
  CategoryName: {
    type: String,
    require: true
  }, 
  name: {
    type: String,
    require: true
  },  
  img: {
    type: String,
    require: true
  }, 
  options:[{
    varient:{
      varientname: String,
      varientprice: Number
    }
  }],
  description: {
    type: String,
    require: true
  }
});

const FoodItem = mongoose.model('fooditem', FoodItemSchema);

module.exports = FoodItem;
