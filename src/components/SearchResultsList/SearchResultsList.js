import React from "react";
// import { MovieCard } from '../searchBar/MovieCard';
import { useSelector } from "react-redux";
// import facepaint from 'facepaint';
import pathOr from "ramda/src/pathOr";
import LoadingSpinner from "../../UI_Frontendlib/atoms/loadingSpinner";
import { SearchPanel } from "./SearchResultsListFragments/SearchPanel/searchPanel";
import { FilterSidenavBar } from "./SearchResultsListFragments/filtersidenav/filtersidenav";
import { ResultsList } from "./SearchResultsListFragments/ResultsList/resultslist";
import Title from "./SearchResultsListFragments/Title/title";
import { Container, Row } from "react-bootstrap";
import { ListMovieGlobalStyle } from "./listmoviesstyle";
import { SearchResultsListLayout } from "./SearchResultsLayout";

const SearchResultsList = ({ movies, title }) => {
  const loading = useSelector((state) =>
    pathOr(false, ["search", "loading"])(state)
  );

  return loading ? (
    <LoadingSpinner />
  ) : (
    <>
      <ListMovieGlobalStyle />
      <SearchResultsListLayout />
      <div className="movie-list-container">
        <Container className="movie-list-filter-wrapper">
          <Row sm={12}>
            <SearchPanel />
            <FilterSidenavBar />
          </Row>
        </Container>
        <Container className="movie-list-content-wrapper">
          <Row>
            <Title title={title} />
          </Row>
          <Row>
            <ResultsList />
          </Row>
        </Container>
      </div>
    </>
  );
};

export default SearchResultsList;
