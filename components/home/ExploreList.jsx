import React from 'react'
import ExploreListItem from './ExploreListItem'
function ExploreList({list}) {
  return (
    <div>
      <div className="explore-list">
        <ExploreListItem link={list[0]}/>
        <ExploreListItem link={list[1]}/>
        <ExploreListItem link={list[2]}/>
        <ExploreListItem link={list[3]}/>
        <ExploreListItem link={list[4]}/>
        <ExploreListItem link={list[5]}/>
        <ExploreListItem link={list[6]}/>
        <ExploreListItem link={list[7]}/>
      </div>
    </div>
  )
}

export default ExploreList