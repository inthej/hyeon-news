import React, {useCallback} from 'react';
import {MomentUtils} from "../../common/utils/MomentUtils";
import {ValueUtils} from "../../common/utils/ValueUtils";

const NewsItem = ({ article }) => {
  const {source, author, title, description, url, urlToImage, publishedAt, content} = article;
  const {id, name} = source;

  const handleClick = useCallback((url) => {
    window.open(url);
  }, []);

  return (
    <div className="collumn" onClick={() => handleClick(url)} style={{cursor: "pointer"}}>
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
    </div>
  );
}

export default React.memo(NewsItem);
