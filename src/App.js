import "./App.css";
import Home from "./components/Home/Home";
import Login from "./components/Login/login"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CartPage from "./pages/CartPage";
import { useSelector } from 'react-redux';


function App() {
  const user = useSelector((state) => state.user);
  return (
      <Router>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/" element={user ? <Home /> : <Login />}></Route>
        </Routes>
      </Router>
  );
}

export default App;
