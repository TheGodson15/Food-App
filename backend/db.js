const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://GoFoodMERN:GoFoood1212@cluster0.mu8dnmx.mongodb.net/GoFoodMern?retryWrites=true&w=majority";
const mongoDB = async() => {
  try {
    await mongoose.connect(mongoURI);
    // await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log("connected");
    const fetched_data = await mongoose.connection.db.collection("fooditems");
    fetched_data.find({}).toArray(function(err, data){
      if(err) console.log(err);
      else console.log(data);
    })
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = mongoDB;
