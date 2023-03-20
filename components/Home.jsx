import React from 'react';
import Slideshow from './home/Slideshow';
import ExploreList from './home/ExploreList';
import { slideShowImages, exploreListImages } from '../data/images_links';

function Home() {
  return (
    <div>
      <div>
        <Slideshow images={slideShowImages} />
      </div>

      <div>
        <ExploreList list={exploreListImages} />
      </div>
    </div>
  );
}

export default Home;
