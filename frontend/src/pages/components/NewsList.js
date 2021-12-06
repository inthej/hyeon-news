import axios from "axios";
import React from 'react';
import {CategoryType} from "../../common/AppTypes";
import usePromise from "../../lib/usePromise";
import NewsItem from "./NewsItem";

const NewsList = ({ category }) => {
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
    <div className="collumns">
      {
        articles.map((article, index) => (
          <NewsItem key={index} article={article}/>
        ))
      }
    </div>
  )
}

export default React.memo(NewsList);
