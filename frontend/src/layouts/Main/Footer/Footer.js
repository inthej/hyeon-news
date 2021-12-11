import PropTypes from 'prop-types';
import React from 'react';
import styled from "styled-components";
import {ReactComponent as GitHub} from "../../../assets/svg/github.svg";
import {ReactComponent as Twitter} from "../../../assets/svg/twitter.svg";
import theme from "../../../theme";

const Container = styled.div`
  min-height: 60px;
  box-sizing: border-box;
  background-color: #000;
  display: flex;
  padding: 15px 32px;
  justify-content: space-between;
  align-items: center;
  
  
`;

const LeftWrap = styled.div`
`;

const RightWrap = styled.div`
`;

const Contact = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
  padding: 0;
  margin: 0;
`;

const ContactItem = styled.li`
  padding: 0;
  margin: 5px;
`;

const Copyright = styled.ul`
  padding: 0;
  margin: 0;
`;


const CopyrightItem = styled.li`
  color: ${theme.gray};
  border-right: none;
  font-size: 12px;
`;

const Footer = props => {
  const { className } = props;
  return (
    <Container className={className}>
      <LeftWrap className="footer-left-wrap">
        <Contact className="contact">
          <ContactItem className="contact-item">
            <a href="https://github.com/inthej" target="_blank" rel="noopener noreferrer" className="nav-link external">
              <GitHub color={theme.gray}/>
            </a>
          </ContactItem>
          <ContactItem>
            <a href="https://twitter.com/inthej12" target="_blank" rel="noopener noreferrer" className="nav-link external">
              <Twitter color={theme.gray}/>
            </a>
          </ContactItem>
        </Contact>
      </LeftWrap>

      <RightWrap className="footer-right-wrap">
        <Copyright className="copyright">
          <CopyrightItem className="copyright-item">
            Copyright Jaehyeon Kim 2021
          </CopyrightItem>
        </Copyright>
      </RightWrap>
    </Container>
  )
}

React.propTypes = {
  className: PropTypes.string
}

export default Footer;
