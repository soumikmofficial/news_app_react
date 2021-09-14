import { SET_LOADING, SET_STORIES } from "./actions";
const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: true };
    case SET_STORIES:
      return {
        ...state,
        loading: false,
        nbPages: action.payload.nbPages,
        hits: action.payload.hits,
      };
  }
};

export default reducer;
