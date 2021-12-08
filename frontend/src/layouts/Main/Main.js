import PropTypes from 'prop-types';
import React from 'react';
import Categories from "./Categories";
import Content from "./Content";
import Header from "./Header";

const Main = props => {
  const {children} = props;
  return (
    <>
      <Header className="header"/>

      <Categories className="subhead"/>

      <Content className='content'>
        {children}
      </Content>
    </>
  )
}

React.propTypes = {
  children: PropTypes.node.isRequired
}

export default Main;
