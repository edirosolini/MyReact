const initialState = {
  businessName: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_LOGIN":
      return {
        ...state,
        businessName: action.businessName,
      };
    default:
      return state;
  }
};

export default reducer;
