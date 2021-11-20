export const userReducer = (oldState = null, action) => {

    if (action.type === "Login_User") {
        const { payload } = action;
        return payload.email
    }
   
    return oldState;
};

