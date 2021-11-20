//Actions
const LOG_IN_ACTION = "thebookspot.com/LOG_IN";
//Action Creators
export const logInActionCreator = (user) => ({
  type: LOG_IN_ACTION,
  payload: { user },
});

export const userReducer = (state = null, action) => {
  if (action.type === LOG_IN_ACTION) {
    const { payload } = action;

    return payload.user;
  }

  return state;
};
