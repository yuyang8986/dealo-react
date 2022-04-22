import React from "react";
import * as Styled from "./StyledSearchBar";
import SearchImg from "../../assets/images/search.svg";

const SearchBar = () => {
  return (
    <Styled.QuickSearchInputDiv>
      <Styled.SearchPlaceHolderTextDiv>
        Search by designation, title, keywords
      </Styled.SearchPlaceHolderTextDiv>
      <Styled.SearchButtonDiv>
        <img src={SearchImg} alt="search" />
      </Styled.SearchButtonDiv>
    </Styled.QuickSearchInputDiv>
  );
};

export default SearchBar;
