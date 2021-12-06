import React from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";
import {CategoryType} from "../common/AppTypes";
import Categories from "./components/Categories";
import NewsList from "./components/NewsList";

const Title = styled(NavLink)`
  text-decoration: none;
  color: #2f2f2f;
`;

const NewsPage = ({match}) => {
  const category = match.params.category || CategoryType.all;

  return (
    <>
      <div className="head">
        <div className="headerobjectswrapper">
          {/*날씨*/}
          {/*<div className="weatherforcastbox">*/}
          {/*  <span style={{fontStyle: "italic"}}>*/}
          {/*    Weatherforcast for the next 24 hours: Plenty of Sunshine*/}
          {/*  </span>*/}
          {/*  <br/>*/}
          {/*  <span>Wind: 7km/h SSE; Ther: 21°C; Hum: 82%</span>*/}
          {/*</div>*/}
          <header>
            <Title to="/">현뉴스</Title>
          </header>
        </div>
      </div>

      <div className="subhead category-container">
        <Categories/>
      </div>

      <div className="content">
        <NewsList category={category}/>
      </div>
    </>
  );
};

export default NewsPage;
