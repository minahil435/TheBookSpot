export const CartReducer = (oldState = [], action) => {

    if (action.type === "ADD_TO_CART") {
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
    if (action.type === "DELETE_ITEM") {
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
    return oldState;
};

