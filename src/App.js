import "./App.css";
import Home from "./components/Home/Home";
import { ShoppingCartContextProvider } from './context/shoppingCartContext';

function App() {
  return (
    <ShoppingCartContextProvider>
    <div className="App">
      <Home />
    </div>
    </ShoppingCartContextProvider>
  );
}

export default App;
