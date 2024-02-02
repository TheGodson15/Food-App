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

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/createuser" element={<Signup />} />
          {/* <Route path="/myOrder" element={<MyOrder/>} />  */}
          
          <Route path="/restaurantSignup" element={<ResturantSignup/>} /> 
          <Route path="/cart" element={<Cart/>} /> 
          <Route path="/MyOrders" element={<MyOrder/>} /> 
          <Route path="/restaurantLogin" element={<ResturantLogin/>} /> 
          <Route path="/addItem" element={<AddItem/>} /> 
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
