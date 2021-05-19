const initialState = {
  tokenAccess: null,
  tokenType: null,
  businessName: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_LOGIN":
      return {
        ...state,
        tokenAccess: action.tokenAccess,
        tokenType: action.tokenType,
        businessName: action.businessName,
      };
    default:
      return state;
  }
};

export default reducer;
