import PropTypes from 'prop-types';
import React from 'react';
import {NavLink} from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  position: relative;
`;

const Title = styled(NavLink)`
  font-family: 'Nanum Gothic ExtraBold', serif;
  font-weight: 900;
  font-size: 80px;
  text-transform: uppercase;
  display: inline-block;
  line-height: 72px;
  margin-bottom: 20px;
  margin-top: 20px;
  
  text-decoration: none;
  color: #2f2f2f;
  
  @media only all and (max-width: 600px) {
    max-width: 100%;
    font-size: 60px;
    line-height: 54px;
    overflow: hidden;
  }
`;

const Wrapper = styled.div``;

const WeatherBox = styled.div`
  font-size: 12px;
  position: relative;
  width: 12%;
  left: 10px;
  border: 3px double #2f2f2f;
  padding: 10px 15px 10px 15px;
  line-height: 20px;
  display: inline-block;
  margin: 0 50px 20px -360px;
  
  @media only all and (max-width: 1300px) {
    display: none;
  }
`;

const Header = props => {
  const { className } = props;
  return (
    <Container className={className}>
      <Wrapper className="header-wrapper">
        {/*<WeatherBox className="weatherforcastbox">*/}
        {/*  <span style={{fontStyle: "italic"}}>*/}
        {/*    Weatherforcast for the next 24 hours: Plenty of Sunshine*/}
        {/*  </span>*/}
        {/*  <br/>*/}
        {/*  <span>Wind: 7km/h SSE; Ther: 21°C; Hum: 82%</span>*/}
        {/*</WeatherBox>*/}
        <Title to="/">현뉴스</Title>
      </Wrapper>
    </Container>
  )
}

React.propTypes = {
  className: PropTypes.string
}

export default Header;
