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
  options:  [  ],
  description: {
    type: String
  },
  description: {
    type: String,
    required: true
  },
  RestaurantId: {
    type: String,
    require: true
  }
});

const FoodItem = mongoose.model('fooditem', FoodItemSchema);

module.exports = FoodItem;
