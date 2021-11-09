import { createContext, useContext, useEffect, useReducer } from "react";

export const shoppingCartContext = createContext();
export const useShoppingCart = () => useContext(shoppingCartContext);

const ADD_TO_CART_ACTION = "ADD_TO_CART";
const DELETE_ITEM = "DELETE_ITEM";

const reducer = (oldState, action) => {
  if (action.type === ADD_TO_CART_ACTION) {
    const {
      payload: { id, title, price, image },
    } = action;
    const itemFound = oldState.find((item) => item.id === action.payload.id);

    if (itemFound) {
      return [
        ...oldState.filter((item) => item.id !== action.payload.id),
        {
          ...itemFound,
          quantity: itemFound.quantity + 1,
        },
      ];
    }

    return [
      ...oldState,
      {
        id,
        title,
        price,
        image,
        quantity: 1,
        timestamp: Date.now(),
      },
    ];
  }
  if (action.type === DELETE_ITEM) {
    const itemFound = oldState.find((item) => item.id === action.payload.id);

    if (itemFound && itemFound.quantity > 1) {
      return [
        ...oldState.filter((item) => item.id !== action.payload.id),
        {
          ...itemFound,
          quantity: itemFound.quantity - 1,
        },
      ];
    }

    return [...oldState.filter((item) => item.id !== action.payload.id)];
  }
};

export const ShoppingCartContextProvider = ({ children }) => {
  const cartInLocalStorage = window.localStorage.getItem("shoppingCart");

  const initialShoppingCart = cartInLocalStorage
    ? JSON.parse(cartInLocalStorage)
    : [];

  const [shoppingCart, dispatch] = useReducer(reducer, initialShoppingCart);

  useEffect(() => {
    window.localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
  }, [shoppingCart]);

  function addItemToCart({ item }) {
    const { id, title, price, image } = item;
    dispatch({
      type: ADD_TO_CART_ACTION,
      payload: {
        id,
        title,
        price,
        image,
      },
    });
  }

  function deleteItemFromCart({ item }) {
    const { id } = item;
    dispatch({
      type: DELETE_ITEM,
      payload: {
        id,
      },
    });
  }

  return (
    <shoppingCartContext.Provider
      value={{
        shoppingCart,
        addItemToCart,
        deleteItemFromCart,
      }}
    >
      {children}
    </shoppingCartContext.Provider>
  );
};
