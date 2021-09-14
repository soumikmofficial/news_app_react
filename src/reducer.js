import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  SET_QUERY,
  HANDLE_PAGE,
} from "./actions";
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

    case REMOVE_STORY:
      return {
        ...state,
        hits: state.hits.filter((story) => story.objectID !== action.payload),
      };

    case SET_QUERY:
      return {
        ...state,
        page: 0,
        query: action.payload,
      };

    case HANDLE_PAGE:
      let newPage;

      if (action.payload === "decrease") {
        state.page > 0
          ? (newPage = state.page - 1)
          : (newPage = state.nbPages - 1);
      }

      if (action.payload === "increase") {
        state.page < state.nbPages - 1
          ? (newPage = state.page + 1)
          : (newPage = 0);
      }
      return { ...state, page: newPage };
    default:
      throw new Error(`${action.type} does not match any action type`);
  }
};

export default reducer;
