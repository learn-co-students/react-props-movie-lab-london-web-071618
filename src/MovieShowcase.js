import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'
// import CardBack from './card-components/CardBack.js';

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    return movieData.map(dataSet => {
      console.log(dataSet);
      return (
      <MovieCard title={dataSet.title} genres={dataSet.genres} IMDBRating={dataSet.IMDBRating} poster={dataSet.poster}/>
      )
    }) 
  }


  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
