import React from 'react';
import ExploreListItem from './ExploreListItem';
function ExploreList({ list }) {
  return (
    <div className="explore-container">
      <ul className="explore-list">
        <li>
          <ExploreListItem link={list[0]} text={"Plants by Type"}/>
        </li>
        <li>
          <ExploreListItem link={list[1]} text={"Plants by Season"}/>
        </li>
        <li>
          <ExploreListItem link={list[2]} text={"Plants by Location"}/>
        </li>
        <li>
          <ExploreListItem link={list[3]} text={"Flowering Plants"}/>
        </li>
        <li>
          <ExploreListItem link={list[4]} text={"Foliage Plants"}/>
        </li>
        <li>
          <ExploreListItem link={list[5]} text={"Plants by Color"}/>
        </li>
        <li>
          <ExploreListItem link={list[6]} text={"Plants by Feature Uses "}/>
        </li>
      </ul>
    </div>
  );
}

export default ExploreList;
