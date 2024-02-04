const express = require('express')
const app = express()
const port = 5000
const mongoDB = require("./db");
app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
})


mongoDB();



app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(express.json());

const { swaggerServe, swaggerSetup } = require('./config')
app.use("/api-docs", swaggerServe, swaggerSetup);

app.use('/api', require("./Routes/CreateUser"));
app.use('/api', require("./Routes/verifyUser"));
app.use('/api', require("./Routes/DisplayData"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 
app.use('/api', require("./Routes/createFoodItem")) 
app.use('/api', require("./Routes/foodItem")) 

app.use('/api', require("./Routes/restaurantCreateUser"))
app.use('/api', require("./Routes/orderData")) 
app.use('/api', require("./Routes/restaurantVerifyUser"))

app.use('/api', require("./routes/editFoodItem"))
app.use('/api', require("./routes/foodId")) 
app.use('/api', require("./routes/foodItemId"))
app.use('/api', require("./routes/RestaurantOrderData"))  
app.use('/api', require("./routes/restaurantusers"))
app.use('/api', require("./routes/updateOrderConfirmation"))
app.use('/api', require("./routes/restaurantusersId"))

// app.listen(5000)
