import React from 'react'
import Card from './Card'

function CardList({data}) {
  return (
    <div className='card-list'>
      <Card url={data.length !== 0 ? data[0].default_image.regular_url : "/../public/images/gardening-girl.jpg"}  name={data.length !== 0 ? data[0].common_name : "name"} />
       <Card url={data.length !== 0 ? data[1].default_image.regular_url : "/../public/images/gardening-girl.jpg"}  name={data.length !== 0 ? data[1].common_name : "name"}/>
       <Card url={data.length !== 0 ? data[2].default_image.regular_url : "/../public/images/gardening-girl.jpg"}  name={data.length !== 0 ? data[2].common_name : "name"}/>
       <Card url={data.length !== 0 ? data[3].default_image.regular_url : "/../public/images/gardening-girl.jpg"}  name={data.length !== 0 ? data[3].common_name : "name"}/>
    </div>
  )
}

export default CardList