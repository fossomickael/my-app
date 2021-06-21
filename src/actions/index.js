import movies from "../movies";


export const setMovies = () => {
    return {
      type: "SET_MOVIES",
      payload: movies
    };
  }