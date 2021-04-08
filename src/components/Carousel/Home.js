import React from "react";
import { Carousel } from "./Carousel";
import { MovieCard } from "./MovieCardBoot";

const Home = ({
  movies,
  title,
  style,
  displayCard,
  progressBar,
  displayTextOnCard,
  displayHoverState,
  redirecturl,
  smallsize = false,
}) => {
  const filterMovies = movies ? movies : "";
  return (
    <div className="home-container">
      <Carousel title={title} style={style} displayCard={displayCard}>
        {filterMovies &&
          filterMovies.map((movie, index) => (
            <MovieCard
              index={index}
              displayCard={displayCard}
              displayTextOnCard={displayTextOnCard}
              key={movie.id}
              movie={movie}
              progressBar={progressBar}
              displayHoverState={displayHoverState}
              redirecturl={redirecturl}
              smallsize={smallsize}
            />
          ))}
      </Carousel>
    </div>
  );
};

export default Home;
