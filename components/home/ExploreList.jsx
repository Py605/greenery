import React from 'react';
import ExploreListItem from './ExploreListItem';
function ExploreList({ list }) {
  return (
    <div className="explore-container">
      <ul className="explore-list">
        <li>
          <ExploreListItem link={list[0]} />
        </li>
        <li>
          <ExploreListItem link={list[1]} />
        </li>
        <li>
          <ExploreListItem link={list[2]} />
        </li>
        <li>
          <ExploreListItem link={list[3]} />
        </li>
        <li>
          <ExploreListItem link={list[4]} />
        </li>
        <li>
          <ExploreListItem link={list[5]} />
        </li>
        <li>
          <ExploreListItem link={list[6]} />
        </li>
        <li>
          <ExploreListItem link={list[7]} />
        </li>
      </ul>
    </div>
  );
}

export default ExploreList;
