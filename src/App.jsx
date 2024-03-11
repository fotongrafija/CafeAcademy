import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { LoginForm } from "./components/LoginForm";


function App() {

  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            {/* <Route path="/" element={<Login />} /> */}
            <Route path="/login" element={<LoginForm />}/>
            <Route path="/register" element={<LoginForm />}/>
            {/* <Route path="/" element={<Shop />} /> */}
            {/* <Route path="/contact" element={<Contact />} /> */}
            <Route path="/" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
