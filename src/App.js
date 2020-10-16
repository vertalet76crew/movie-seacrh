import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./App.css";
import Header from "./components/Header";
import Movie from "./components/Movie";
import Search from "./components/Search";
import apiService from "./query/apiService";
import { spinerShowAction, spinerHideAction } from "./redux/actions";

const App = ({
  showSpiner,
  dispatch,
  showSpinerHandler,
  hideSpinerHandler,
}) => {
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    apiService.getMovie().then((data) => {
      setMovies(data.Search);

      hideSpinerHandler();
    });
  }, []);

  const search = (searchValue) => {
    showSpinerHandler();
    setErrorMessage(null);
    apiService.getMovie(searchValue).then((data) => {
      if (data.Response === "True") {
        setMovies(data.Search);

        hideSpinerHandler();
      }
      setErrorMessage(data.Error);

      hideSpinerHandler();
    });
  };

  return (
    <div className="app">
      <Header text="Поиск фильмов (только английские названия)" />
      <Search search={search} />
      <div className="app__wrap">
        {showSpiner && !errorMessage ? (
          <div
            className="spinner-border text-primary app__spiner"
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
        ) : errorMessage ? (
          <div className="app__error-message">{errorMessage}</div>
        ) : (
          movies.map((movie, index) => (
            <Movie key={`${movie.imdbID}`} movie={movie} />
          ))
        )}
      </div>
    </div>
  );
};
const mapStateToprops = (state) => {
  return { showSpiner: state.showSpiner.showSpiner };
};
const mapDispatchToProps = (dispatch) => {
  return {
    showSpinerHandler: bindActionCreators(spinerShowAction, dispatch),
    hideSpinerHandler: bindActionCreators(spinerHideAction, dispatch),
  };
};

export default connect(mapStateToprops, mapDispatchToProps)(App);
