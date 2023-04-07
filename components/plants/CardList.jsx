import React from 'react'
import Card from './Card'

function CardList({page}) {
  const source = (page === "plants") ? "gardening-girl" : "seeds/common-seed-image";
  return (
    <div className='card-list'>
      <Card url={`/../public/images/${source}.jpg`} page={page} />
       <Card url={`/../public/images/${source}.jpg`} page={page} />
       <Card url={`/../public/images/${source}.jpg`} page={page} />
       <Card url={`/../public/images/${source}.jpg`} page={page} />
    </div>
  )
}

export default CardList