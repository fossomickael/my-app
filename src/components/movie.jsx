import React, { Component } from 'react'; 

class Movie extends Component {

    render() {
        const style = {
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('${
              this.props.movie.imageUrl
            }')`
          };
        return ( <div className="card-category" style={style} >
            {this.props.movie.name}
        </div>
        );
    }

}

export default Movie;