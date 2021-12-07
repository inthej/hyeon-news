import PropTypes from 'prop-types';
import React from 'react';
import styled from "styled-components";

const Container = styled.div``;

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
