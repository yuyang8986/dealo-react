import React from "react";
import * as Styled from "./StyledQuickSearch";
import Searchbar from "../../components/searchBar/index"

const QuickSearch = () => {
  return (
    <Styled.QuickSearchBarDivContainer>
      <Styled.TitleTextDiv data-testid="quicksearch-title-id">Search Standards or collections</Styled.TitleTextDiv>
       <Searchbar/>
      <Styled.TipsAndAdvancedSearchLinksDiv>
        <span>Search Tips</span>
        <span>Advanced Search</span>
      </Styled.TipsAndAdvancedSearchLinksDiv>
    </Styled.QuickSearchBarDivContainer>
  );
};

export default QuickSearch;
