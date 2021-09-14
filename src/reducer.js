import { SET_LOADING, SET_STORIES, REMOVE_STORY } from "./actions";
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

    default:
      throw new Error(`${action.type} does not match any action type`);
  }
};

export default reducer;
