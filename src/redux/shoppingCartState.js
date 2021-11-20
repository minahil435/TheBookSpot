import { useSelector, useDispatch } from "react-redux";

const sortCartItems = (shoppingCartArray) => {
  const sorted = shoppingCartArray.sort(function (x, y) {
    console.log({ x, y });
    console.log({ xTimestamp: x.timestamp });

    console.log("number: ", y.timestamp - x.timestamp);

    return y.timestamp - x.timestamp;
  });

  return sorted;
};

const getShoppingCartTotal = (shoppingCart) => {
  const total = shoppingCart.reduce((accumulator, item, index, array) => {
    return accumulator + (item.price * item.quantity) / 100;
  }, 0);

  return total;
};

//ACTIONS
const ADD_TO_CART_ACTION = "thebookspot.com/ADD_TO_CART";
const REMOVE_FROM_CART_ACTION = "thebookspot.com/REMOVE_FROM_CART";

//ACTION CREATORS
export const addToCartActionCreator = ({ id, title, price, image }) => {
  return {
    type: ADD_TO_CART_ACTION,
    payload: {
      id,
      title,
      price,
      image,
    },
  };
};

const removeFromCartActionCreator = (itemId) => {
  return {
    type: REMOVE_FROM_CART_ACTION,
    payload: {
      id: itemId,
    },
  };
};

const cartInLocalStorage = window.localStorage.getItem("shoppingCart");

const initialState = cartInLocalStorage ? JSON.parse(cartInLocalStorage) : [];

export const shoppingCartReducer = (state = initialState, action) => {
  if (action.type === ADD_TO_CART_ACTION) {
    const {
      payload: { id, title, price, image },
    } = action;

    const itemFound = state.find((item) => item.id === action.payload.id);

    if (itemFound) {
      console.log(itemFound);
      return sortCartItems([
        ...state.filter((item) => item.id !== action.payload.id),
        {
          ...itemFound,
          quantity: itemFound.quantity + 1,
        },
      ]);
    }

    return sortCartItems([
      ...state,
      {
        id,
        title,
        price,
        image,
        quantity: 1,
        timestamp: Date.now(),
      },
    ]);
  }

  if (action.type === REMOVE_FROM_CART_ACTION) {
    console.log(state);
    const itemFound = state.find((item) => item.id === action.payload.id);

    if (itemFound) {
      if (itemFound.quantity === 1) {
        return sortCartItems(
          state.filter((item) => item.id !== action.payload.id)
        );
      }

      return sortCartItems([
        ...state.filter((item) => item.id !== action.payload.id),
        {
          ...itemFound,
          quantity: itemFound.quantity - 1,
        },
      ]);
    }
  }

  return state;
};

export const useReduxShoppingCart = () => {
  const dispatch = useDispatch();

  const addItemToCart = ({ id, title, price, image }) => {
    console.log(id, title, price);
    dispatch(
      addToCartActionCreator({
        id,
        title,
        price,
        image,
      })
    );
  };

  const removeFromCart = (id) => {
    dispatch(removeFromCartActionCreator(id));
  };

  const shoppingCart = useSelector((state) => state.shoppingCart);

  return {
    addItemToCart,
    removeFromCart,
    shoppingCart,
    total: getShoppingCartTotal(shoppingCart),
  };
};
