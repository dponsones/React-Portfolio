import React from 'react';
import Card from '../Card';
import cash4cacheImage from './images/cash4cache.png';
import literacyLaneImage from './images/Literacy-Lane.png';
import JsQuiz from './images/Jsquiz.jpeg'
import VinylVibes from './images/VinylVibes.png'

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
          link="https://github.com/dponsones"
          />
        <Card
          imgSrc={JsQuiz}
          imgAlt="JsQuiz"
          title="JavaScript Quiz"
          description="Quiz yourself on JavaScript!"
          link="https://github.com/dponsones"
          />
        <Card
          imgSrc={VinylVibes}
          imgAlt="VinylVibes"
          title="Vinyl Vibes"
          description="Eccommerce website for buy vinyls"
          link="https://github.com/dponsones"
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
