import PropTypes from 'prop-types';
import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  text-align: left;
  padding: 10px 10px;
`;

const NotFound = props => {
  const handleGoBack = () => {
    props.history.goBack();
  }

  return (
    <Container>
      페이지를 찾을 수 없습니다.
      <button onClick={handleGoBack}>이전</button>
    </Container>
  )
}

React.propTypes = {
  match: PropTypes.object
}

export default NotFound;
