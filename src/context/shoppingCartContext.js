import { createContext, useContext, useEffect, useReducer } from "react";

export const shoppingCartContext = createContext();
export const useShoppingCart = () => useContext(shoppingCartContext);

const ADD_TO_CART_ACTION = "ADD_TO_CART";

const reducer = (oldState, action) => {

    if (action.type === ADD_TO_CART_ACTION) {
        const { payload: { id, title, price, image } } = action;
        const itemFound = oldState.find(item => item.id === action.payload.id);

        if (itemFound) {
            return [
                ...oldState.filter(item => item.id !== action.payload.id),
                {
                    ...itemFound,
                    quantity: itemFound.quantity + 1,
                }
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
            }
        ]
    }
};

export const ShoppingCartContextProvider = ({ children }) => {
    const [shoppingCart, dispatch] = useReducer(reducer, []);

    function addItemToCart({item}){
        const { id, title, price, image} = item
        dispatch({
            type: ADD_TO_CART_ACTION,
            payload: {
                id,
                title,
                price,
                image,
            }
        })
    }

    return (
        <shoppingCartContext.Provider
            value={{
                shoppingCart,
                addItemToCart,
            }}
        >
            {children}
        </shoppingCartContext.Provider>
    )
};