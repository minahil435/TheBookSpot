import "./App.css";
import Home from "./components/Home/Home";
import { ShoppingCartContextProvider } from "./context/shoppingCartContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import store from "./redux";
import CartPage from "./pages/CartPage";
import LoginPage from "./components/login/Login";

function App() {
  return (
    <ReduxProvider store={store}>
      <ShoppingCartContextProvider>
        <Router>
          <Routes>
            <Route path="/cart" element={<CartPage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </Router>
      </ShoppingCartContextProvider>
    </ReduxProvider>
  );
}

export default App;
