import { SET_LOADING } from "./actions";
const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: true };
  }
};

export default reducer;
