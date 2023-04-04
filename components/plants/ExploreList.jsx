import React from 'react';
import ExploreListItem from './ExploreListItem';
import { plantsExploreList,seedsExploreList } from '@/data/exploreList';
function ExploreList({ list,page }) {
  const nameList = (page === "plants") ? plantsExploreList : seedsExploreList;
  console.log(page);
  return (
    <div className="explore-container">
      <ul className="explore-list">
        <li>
          <ExploreListItem link={list[0]} text={nameList[0]}/>
        </li>
        <li>
          <ExploreListItem link={list[1]} text={nameList[1]}/>
        </li>
        <li>
          <ExploreListItem link={list[2]} text={nameList[2]}/>
        </li>
        <li>
          <ExploreListItem link={list[3]} text={nameList[3]}/>
        </li>
        <li>
          <ExploreListItem link={list[4]} text={nameList[4]}/>
        </li>
        <li>
          <ExploreListItem link={list[5]} text={nameList[5]}/>
        </li>
 
      </ul>

    </div>
  );
}

export default ExploreList;
