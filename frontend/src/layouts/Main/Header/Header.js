import PropTypes from 'prop-types';
import React from 'react';
import {NavLink} from "react-router-dom";
import styled from "styled-components";

const Title = styled(NavLink)`
  text-decoration: none;
  color: #2f2f2f;
`;

const Container = styled.div``;

const Header = props => {
  const { className } = props;
  return (
    <Container className={className}>
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
    </Container>
  )
}

React.propTypes = {
  className: PropTypes.string
}

export default Header;
