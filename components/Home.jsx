import React from 'react';
import Slideshow from './home/Slideshow';
import ExploreList from './home/ExploreList';
import TopProducts from './home/TopProducts';
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
      <div>
        <p>
          Greenery is a one-stop online plants store presenting the freshest and
          finest plants for your house, providing next day delivery at your
          doorstep. Shower the solitude, purity, and love on your house with our
          exceptional range of indoor plants, air purifying plants, ceramic
          planters, terracotta pots, bonsai plants, cactus plants, low
          maintenance plants, vegetable plants, and Good luck plants.
        </p>
      </div>
      <div>
        <TopProducts />
      </div>
    </div>
  );
}

export default Home;