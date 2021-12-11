import PropTypes from 'prop-types';
import React from "react";
import styled from "styled-components";
import {CategoryType} from "../../common/AppTypes";
import NewsList from "./components/NewsList";

const Container = styled.div`
`;

const News = (props) => {
  const {history, location, match, staticContext} = props;
  const category = match.params.category || CategoryType.all;

  return (
    <Container>
      <NewsList className="columns" category={category}/>
    </Container>
  );
};

News.propTypes = {
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object
  // staticContext: PropTypes.object
}

export default News;
