import React from 'react'
import Card from './Card'

function CardList({data}) {
  return (
    <div className='card-list'>
      <Card url={"/../public/images/gardening-girl.jpg"}  name={"New Plant"}/>
       <Card url={"/../public/images/gardening-girl.jpg"}  name={"New Plant"}/>
       <Card url={"/../public/images/gardening-girl.jpg"}  name={"New Plant"}/>
       <Card url={"/../public/images/gardening-girl.jpg"}  name={"New Plant"}/>
    </div>
  )
}

export default CardList