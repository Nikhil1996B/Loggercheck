import React from "react";
import { MovieCard } from "../../../searchBar/MovieCard";
import { pathOr } from "ramda";
import { useSelector } from "react-redux";
import { ResultsListGolbalStyle } from "./resultsstyle";
import { CarousalStyle } from "../../../Carousel/movicardstyle";

export const ResultsList = () => {
  const moviesRecord = useSelector((state) =>
    pathOr([], ["search", "records", "fetchedMovies"])(state)
  );

  if (!moviesRecord.length) {
    return (
      <div className="movie-list-container">
        <h1>No Results found. try with some other search criteria.</h1>
      </div>
    );
  }
  return (
    <>
      <CarousalStyle />
      <ResultsListGolbalStyle />
      <ol className="movie-list-grid">
        {moviesRecord &&
          moviesRecord.map((movie) => (
            <li key={movie.id}>
              <MovieCard movie={movie} displayTextOnCard={false} />
            </li>
          ))}
      </ol>
    </>
  );
};
