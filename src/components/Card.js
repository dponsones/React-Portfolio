import React from 'react';
import "./Card.css";

const Card = ({
  imgSrc,
  imgAlt,
  title,
  description,
  link
}) => {
  return (
    <div className='card-container'>
       <a></a> <img src={imgSrc} alt={imgAlt} />
        <h1 className='card-title'>{title}</h1>
        <p className='card-description'>{description}</p>
        <a className='card-link'href={link}>See more here</a>
    </div>
  )
}

export default Card