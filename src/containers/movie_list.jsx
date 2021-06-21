import React, { Component } from 'react'; 
import Movie from '../components/movie.jsx'
import { setMovies } from "../actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
class MovieList extends Component {


    componentDidMount() {
        this.props.setMovies();
      }

    render() {
        return <div><Movie/></div>
    }


}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ setMovies }, dispatch);
  }

export default MovieList;