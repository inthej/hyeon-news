import axios from "axios";
import PropTypes from 'prop-types';
import React from 'react';
import styled from "styled-components";
import {CategoryType} from "../../../common/AppTypes";
import usePromise from "../../../lib/usePromise";
import NewsItem from "./NewsItem";

const Container = styled.div`
  padding: 0 10px;
`;

const NewsList = props => {
  const { className, category } = props;
  const [loading, response, error] = usePromise(() => {
    const param = category === CategoryType.all ? '' : `/${category}`;
    return axios.get(`/api/news${param}`);
  }, [category]);

  if (loading) {
    return <>대기중...</>;
  }

  if (!response) {
    return null;
  }

  const { articles } = response.data;
  return (
    <Container className={className}>
      {
        articles.map((article, index) => (
          <NewsItem className="column" key={index} article={article}/>
        ))
      }
    </Container>
  )
}

React.propTypes = {
  className: PropTypes.string,
  category: PropTypes.string
}

export default React.memo(NewsList);
