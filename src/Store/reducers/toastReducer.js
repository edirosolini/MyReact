const initialState = {
  title: null,
  description: null,
  typeToast: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_TOAST":
      return {
        ...state,
        title: action.title,
        description: action.description,
        typeToast: action.typeToast,
      };
    default:
      return state;
  }
};

export default reducer;
