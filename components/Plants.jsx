import React, { useState,useEffect } from 'react';
import ExploreList from './plants/ExploreList';
import { plantsListImages } from '../data/images_links';
import CardList from './plants/CardList';
import ExtraItemList from './plants/ExtraItemList';

function Plants() {
  const [data,setData] = useState([]);
  
  async function findData(){
    const response = await fetch(
      "https://perenual.com/api/species-list?page=1&key=sk-f5sW6421322fbae39352"
    );
    const json = await response.json();
    await setData(json.data);
  }

  useEffect(function(){
    findData();
    
  },[]);

  return (
    <div className="plants-conatiner">
      <div className='m-3 plants-info'>
        <h3>Plants </h3>
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
        <CardList data = {data.splice(0,4)} />
      </div>
      <div className='mb-4'>
        <CardList data = {data.splice(4,8)}/>
      </div>
      <div className='mb-4'>
        <CardList data = {data.splice(8,12)}/>
      </div>
      <div className="btn">
        <button className='load-more-btn'>Load More</button>
      </div>
      <div className='mt-4 mb-4 in-between'>
        <h4>You may also need</h4>
      </div>
      <div className='mt-4 mb-4'>
        <ExtraItemList />
      </div>
    </div>
  );
}

export default Plants;
