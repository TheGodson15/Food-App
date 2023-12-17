const mongoose = require("mongoose");
const mongoURI =  "mongodb+srv://GoFoodMERN:GoFoood1212@cluster0.mu8dnmx.mongodb.net/GoFoodMern?retryWrites=true&w=majority";
// const mongoURI =  "mongodb+srv://GoFoodMERN:GoFoood1212@cluster0.mu8dnmx.mongodb.net/GoFoodMern?retryWrites=true&w=majority"; //3.7
// const mongoURI =  "mongodb+srv://GoFoodMERN:GoFoood1212@cluster0.mu8dnmx.mongodb.net/GoFoodMern?retryWrites=true&w=majority"; //2.2.2
const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log("connected");
    const fetched_data = await mongoose.connection.db.collection("fooditem");
    fetched_data.find({}).toArray(async function (err, data) {
      const foodCategory = await mongoose.connection.db.collection("foodCategory");
      foodCategory.find({}).toArray(function (err, catData){
        if (err) console.log(err);
        else{
            global.fooditem = data;
            global.foodCategory = catData;
        }
        
      })
      // if (err) console.log(err);
      // else{
      //   global.fooditem = data;
      //   console.log(global.fooditem)

      // } 
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = mongoDB;
