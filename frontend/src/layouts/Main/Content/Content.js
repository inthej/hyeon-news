import PropTypes from 'prop-types';
import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  font-size: 0;
  line-height: 0;
  word-spacing: -.31em;
  display: inline-block;
  margin: 30px 0 0 0;

  min-height: calc(100vh - 60px);
`;

const Content = props => {
  const {className, children} = props;
  return (
    <Container className={className}>
      {children}
    </Container>
  )
}

React.propTypes = {
  classname: PropTypes.string,
  children: PropTypes.node
}

export default Content;
