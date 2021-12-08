import React, {useCallback} from 'react';
import styled from "styled-components";
import {MomentUtils} from "../../../common/utils/MomentUtils";
import {ValueUtils} from "../../../common/utils/ValueUtils";
import './NewsItem.css';

const Container = styled.div`
  font-size: 17px;
  line-height: 20px;
  width: 17.5%;
  display: inline-block;
  padding: 0 1% 0 1%;
  vertical-align: top;
  margin-bottom: 50px;
  transition: all .7s;
  
  + .column {
    border-left: 1px solid #2f2f2f;
  }
  
  @media only all and (max-width: 1200px) {
    width: 31%;
  }

  @media only all and (max-width: 900px) {
    width: 47%;
  }

  @media only all and (max-width: 600px) {
    width: 100%;
    border-bottom: 1px solid #2f2f2f;
    
    + .column {
      border-left: none;
      border-bottom: 1px solid #2f2f2f;
    }
  }
`;

const NewsItem = props => {
  const { className, article } = props;
  const {source, author, title, description, url, urlToImage, publishedAt, content} = article;
  const {id, name} = source;

  const handleClick = useCallback((url) => {
    window.open(url);
  }, []);

  return (
    <Container className={className} onClick={() => handleClick(url)} style={{cursor: "pointer"}}>
      <div className="head">
        <span className="headline hl1">{ValueUtils.nvl(title)}</span>
        <p>
          <span className="headline hl6">{MomentUtils.dt2dateTime(publishedAt, 'YYYY-MM-DD HH:mm:ss')}</span>
        </p>
      </div>

      <figure className="figure">
        {urlToImage && <img className="media" src={urlToImage} alt=""/>}
        {name && <figcaption className="figcaption">{name}</figcaption>}
      </figure>

      {description && <p className="description">{description}</p>}
    </Container>
  );
}

export default React.memo(NewsItem);
