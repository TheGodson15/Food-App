import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Signup from "./Pages/Signup.js";
import { CartProvider } from "./components/ContextReducer.js";
import ResturantLogin from "../src/Pages/RestaurantLogin.js"
import ResturantSignup from "../src/Pages/RestaurantSignUp.js"
import AddItem from "../src/Pages/AddItem.js"
import Cart from "./Pages/Cart.js";
import MyOrder from "./Pages/MyOrder.js";
import Navbar from "./components/Navbar.js";
import RestaurantFoodItem from './Pages/RestaurantFoodItem.js';
import EditItem from './Pages/RestaurantEditItem.js';
import RestaurantPage from './Pages/RestaurantPage.js'
import RestaurantOrder from './Pages/RestaurantOrder.js'




function App() {
  return (
    <CartProvider>
      <Router>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/createuser" element={<Signup />} />
          {/* <Route path="/myOrder" element={<MyOrder/>} />  */}
          
          <Route path="/restaurantSignup" element={<ResturantSignup/>} /> 
          <Route path="/cart" element={<Cart/>} /> 
          <Route path="/MyOrders" element={<MyOrder/>} /> 
          <Route path="/restaurantLogin" element={<ResturantLogin/>} /> 
          <Route path="/restaurantFoodItem/:id" element={<RestaurantFoodItem/>} />
          <Route path="/addItem" element={<AddItem/>} /> 
          <Route path="/editItem/:id" element={<EditItem/>} />  
          <Route path="/restaurant/:id" element={<RestaurantPage/>} /> 
          <Route path="/restaurantOrder" element={<RestaurantOrder/>} /> 

        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
