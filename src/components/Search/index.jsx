import React, { useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { changeSearchStringAction } from "../../redux/actions";
import "./search.css";

const Search = ({ search, setSearchString, searchString }) => {
  const resetInputField = () => {
    setSearchString("");
  };

  const callSearchFunction = (e) => {
    e.preventDefault();

    search(searchString);
    resetInputField();
  };

  return (
    <form className="search">
      <input
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
        type="text"
        className="search__inp"
        placeholder="Enter movie (en)"
      />
      <button
        className="search__btn"
        onClick={callSearchFunction}
        type="submit"
      >
        Search movie
      </button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    searchString: state.searchString.searchString,
  };
};

const mapDispatchToprops = (dispatch) => {
  return {
    setSearchString: bindActionCreators(changeSearchStringAction, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToprops)(Search);
