import React, { useContext, useReducer, useEffect } from "react";
import {
  REMOVE_STORY,
  SET_LOADING,
  SET_STORIES,
  SET_QUERY,
  HANDLE_PAGE,
} from "./actions";
import reducer from "./reducer";

const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const initialState = {
    loading: true,
    query: "india",
    nbPages: 0,
    hits: [],
    page: 0,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchStories = async (url) => {
    dispatch({ type: SET_LOADING });
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data) {
        dispatch({
          type: SET_STORIES,
          payload: { hits: data.hits, nbPages: data.nbPages },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const removeStory = (id) => {
    dispatch({ type: REMOVE_STORY, payload: id });
  };

  const setQuery = (q) => {
    dispatch({ type: SET_QUERY, payload: q });
  };

  const handlePage = (action) => {
    dispatch({ type: HANDLE_PAGE, payload: action });
  };

  useEffect(() => {
    const url = `${API_ENDPOINT}&query=${state.query}&page=${state.page}`;
    fetchStories(url);
  }, [state.query, state.page]);

  return (
    <AppContext.Provider
      value={{ ...state, removeStory, setQuery, handlePage }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
