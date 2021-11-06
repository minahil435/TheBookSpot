import "./App.css";
import Home from "./components/Home/Home";
import { ShoppingCartContextProvider } from "./context/shoppingCartContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <ShoppingCartContextProvider>
      <Router>
        <Routes>
          <Route path="/cart" element={<CartPage />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </ShoppingCartContextProvider>
  );
}

export default App;
