import { createStore } from "redux";

//Actions
const LOG_IN_ACTION = "thebookspot.com/LOG_IN";
//Action Creators
export const logInActionCreator = (user) => ({
  type: LOG_IN_ACTION,
  payload: { user },
});

const reducer = (state, action) => {
  if (action.type === LOG_IN_ACTION) {
    const { payload } = action;

    return { ...state, user: payload.user };
  }
  return state;
};

const initialState = { user: undefined };

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
