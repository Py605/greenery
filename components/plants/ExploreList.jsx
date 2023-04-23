import React from 'react';
import ExploreListItem from './ExploreListItem';
import { metaList } from '@/data/exploreList';

function ExploreList({ list,page }) {

  const nameList = metaList[page];
  return (
    <div className="explore-container">
      <ul className="explore-list">
        {
        nameList.map((element,index)=>{
          return (
          <li>
            <ExploreListItem key="{index}" link={list[index]} text={element }/>
          </li>
          )})
        }
      </ul>
    </div>
  );
}

export default ExploreList;
