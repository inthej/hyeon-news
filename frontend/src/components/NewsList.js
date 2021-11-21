import axios from "axios";
import React from 'react';
import {CategoryType} from "../common/AppTypes";
import usePromise from "../lib/usePromise";
import NewsItem from "./NewsItem";

const NewsList = ({ category }) => {
  const [loading, response, error] = usePromise(() => {
    const query = category === CategoryType.all ? '' : `&category=${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=f2da6d57a4d8452e81b3d0ac193f1ea1`,
    )
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

export default NewsList;
