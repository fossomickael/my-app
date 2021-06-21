import logo from './logo.svg';
import React from "react";
import MovieList from './containers/movie_list';

const App =() => {
  return (
    <div className="App">
      <div> <MovieList /></div>
    </div>
  );
}

export default App;
