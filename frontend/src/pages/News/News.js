import PropTypes from 'prop-types';
import React from "react";
import styled from "styled-components";
import {CategoryType} from "../../common/AppTypes";
import NewsList from "./components/NewsList";

const Container = styled.div`
`;

const News = (props) => {
  const {match, history} = props;
  const category = match.params.category || CategoryType.all;

  return (
    <Container>
      <NewsList className="columns" category={category}/>
    </Container>
  );
};

News.propTypes = {
  match: PropTypes.object.isRequired
}

export default News;
