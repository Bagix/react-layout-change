import React from 'react';
import './Article.css'

const article = (props) => {

  let title = null;

  if(props.layout) {
    title = (
      <h3>{props.title}</h3>
    )
  }

  return(
    <li className="article">
      <a href={props.url} target="_blank">
        <img src={props.img} />
        {title}
      </a>
    </li>
  )

}

export default article;