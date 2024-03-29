 
const express = require('express')
const router = express.Router()  
const FoodItem = require('../models/food_item');
const Category = require('../models/food_category');

router.get("/fooditem", async (req, res) => { 
    try { 
        
        try {
            const foodItem = await FoodItem.find({}) 
            global.fooditem = foodItem
          } catch (err) {
            console.log("FoodItemError",err)
          }

          try {
            const foodCategory = await Category.find({}) 
            global.foodcategory = foodCategory
          } catch (err) {
            console.log("categoryError",err)
          }
        return res.send([global.fooditem, global.foodcategory] )

    } catch (error) {
        console.log('error-----------', error)
        return res.status(400).json({ success: false })
    }

})

module.exports = router;

