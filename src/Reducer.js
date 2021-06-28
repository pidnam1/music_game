const initState = {
  options: {
    artist: "",
  },
  questions: {},
  index: 0,
  score: 0,
  fetched: false,
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

  if (action.type === "SET_QUESTIONS") {
    return {
      ...state,
      questions: action.questions,
    };
  }
  if (action.type === "SET_INDEX") {
    return {
      ...state,
      questions: action.index,
    };
  }
  if (action.type === "SET_SCORE") {
    return {
      ...state,
      questions: action.score,
    };
  }
  if (action.type === "SET_FETCHED") {
    return {
      ...state,
      fetched: action.fetched,
    };
  }
  return state;
};

export default Reducer;
