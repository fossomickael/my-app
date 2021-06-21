import React, { Component } from 'react'; 
import Movie from '../components/movie.jsx'
import { setMovies } from "../actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class MovieList extends Component {


    componentDidMount() {
        
        this.props.setMovies();
        console.log(this.props.movies);
      }

    render() {
      return <div className="flat-list col-sm-7">
        
        {this.props.movies.map((movie, index) => {
          return <Movie key={movie.name} movie={movie}  />;
        })}
         </div>
    }


}

function mapStateToProps(state) {
  return {
    movies: state.movies
  };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ setMovies }, dispatch);
  }

export default  connect(mapStateToProps, mapDispatchToProps)(MovieList);