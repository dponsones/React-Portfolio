import React from 'react';
import Card from '../Card';
import cash4cacheImage from './cash4cache.png';
import literacyLaneImage from './Literacy-Lane.png'
const Portfolio = () => {
  return (
    <div className='header-wrapper'>
      <div className='portfolio-container'>
        <Card
          imgSrc={cash4cacheImage}
          imgAlt="Cash4cache logo"
          title="Cash4Cache"
          description="Eccommerce website for computer products"
          link="google.com"
          />
        <Card
          imgSrc={literacyLaneImage}
          imgAlt="Literacy Lane logo"
          title="Literacy Lane"
          description="Website designed to help children read and learn "
          link="google.com"
          />
        <Card
          imgSrc={cash4cacheImage}
          imgAlt="Cash4cache logo"
          title="Cash4Cache"
          description="Eccommerce website for computer products"
          link="google.com"
          />
        <Card
          imgSrc={cash4cacheImage}
          imgAlt="Cash4cache logo"
          title="Cash4Cache"
          description="Eccommerce website for computer products"
          link="google.com"
          />
        <Card
          imgSrc={cash4cacheImage}
          imgAlt="Cash4cache logo"
          title="Cash4Cache"
          description="Eccommerce website for computer products"
          link="google.com"
          />
          
      </div>
    </div>
  );
};

export default Portfolio;
