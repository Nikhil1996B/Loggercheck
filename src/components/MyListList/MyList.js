import React, { useEffect } from "react";
// import { MovieCard } from '../searchBar/MovieCard';
// import { SearchPanel } from './MyListFragments/SearchPanel/searchPanel';
import { useSelector, useDispatch } from "react-redux";
// import facepaint from 'facepaint';
import pathOr from "ramda/src/pathOr";
import LoadingSpinner from "../../UI_Frontendlib/atoms/loadingSpinner";
import { ResultsList } from "./MyListFragments/ResultsList/resultslist";
import Title from "./MyListFragments/Title/title";
import { Container, Row } from "react-bootstrap";
import { ListMovieGlobalStyle } from "./listmoviesstyle";
import { MyListLayout } from "./ListMoviesLayout";
import { MyListActions } from "../../actions/mylistactions";
import { useMediaQuery } from "../../components/Header/viewportHook";

// require('./style.scss');

// const variants = ['h1', 'h3', 'body1', 'caption'];

const MyListList = ({ movies, title }) => {
  const loading = useSelector((state) =>
    pathOr(false, ["mylist", "loading"])(state)
  );
  const dispatch = useDispatch();
  const xxl = useMediaQuery("(min-width: 1200px)");

  useEffect(() => {
    dispatch(MyListActions.MyListReq("action"));
  }, []);

  return loading ? (
    <LoadingSpinner />
  ) : (
    <>
      <ListMovieGlobalStyle />
      <MyListLayout />
      <div className="movie-list-container">
        <Container className="mylist-movie-list-container">
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

export default MyListList;
