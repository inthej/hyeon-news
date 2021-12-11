import PropTypes from 'prop-types';
import React from 'react';
import styled from "styled-components";
import Categories from "./Categories";
import Content from "./Content";
import Footer from "./Footer/Footer";
import Header from "./Header";

const Container = styled.div`
  height: 100%;
`

const Main = props => {
  const {children} = props;
  return (
    <Container>
      <Header className="header"/>

      <Categories className="subhead"/>

      <Content className='content'>
        {children}
      </Content>

      <Footer className="footer"/>
    </Container>
  )
}

React.propTypes = {
  children: PropTypes.node.isRequired
}

export default Main;
