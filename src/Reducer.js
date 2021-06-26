const initState = {
  options: {
    artist: "",
  },
};

const Reducer = (state = initState, action) => {
  if (action.type === "CHANGE_ARTIST") {
    return {
      ...state,
      options: {
        ...state.options,
        artist: action.value,
      },
    };
  }
  return state;
};

export default Reducer;
