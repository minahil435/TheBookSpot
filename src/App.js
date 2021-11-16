import "./App.css";
import { Provider } from 'react-redux'
import store from "./redux/index"

import Home from "./components/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/cart" element={<CartPage />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
