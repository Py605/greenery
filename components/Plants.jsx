import React from 'react';
import ExploreList from './plants/ExploreList';
import Heading from './plants/Heading';
import { plantsListImages } from '../data/images_links';
import CardList from './plants/CardList';

function Plants() {
  return (
    <div className="plants-conatiner">
      <div className='m-3 plants-info'>
        <h3>Plants</h3>
        <p>
          Plants are living miracles that bring life and beauty to our world. From the tallest trees to the tiniest mosses, they come in an incredible variety of shapes, colors, and sizes, each one unique and wondrous in its own way. They are masters of photosynthesis, using sunlight to transform carbon dioxide and water into the oxygen and organic compounds that sustain all life on Earth. But they are much more than mere producers of oxygen. 
        </p>
      </div>
      <div className='mb-4'>
        <ExploreList list={plantsListImages} />
      </div>
      <div className='mb-3'>
        <h2>Buy Your Favourite Plants</h2>
      </div>
      <div className='mb-4'>
        <CardList />
      </div>
      <div className='mb-4'>
        <CardList />
      </div>
      <div className='mb-4'>
        <CardList />
      </div>
      <div className="btn">
        <button className='load-more-btn'>Load More</button>
      </div>
    </div>
  );
}

export default Plants;
