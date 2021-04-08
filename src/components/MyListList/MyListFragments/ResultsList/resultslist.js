import React, { useState, useEffect } from "react";
import { MovieCard } from "../../../searchBar/MovieCard";
import { pathOr } from "ramda";
import { useSelector } from "react-redux";
import { CarousalStyle } from "../../../Carousel/movicardstyle";

export const ResultsList = () => {
  const moviesRecord = useSelector((state) =>
    pathOr([], ["mylist", "records", "records"])(state)
  );
  const loading = useSelector((state) =>
    pathOr(false, ["mylist", "loading"])(state)
  );
  if (!moviesRecord.length) {
    return (
      <div className="movie-list-container">
        <h1>Nothing added to the list yet.</h1>
      </div>
    );
  }
  return (
    <>
      <CarousalStyle />
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
