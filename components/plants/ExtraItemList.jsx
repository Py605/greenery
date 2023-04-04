import React from 'react'
import ExtraItemCard from './ExtraItemCard'

function ExtraItemList({page}) {
  return (
    <div className='extra-item-list'>
      <ExtraItemCard name={"Soil and Fertilizers"} url={"/../public/images/soils-and-fertilizers.jpg"}/>
      <ExtraItemCard name={"Planters"} url={"/../public/images/planters.jpg"}/>
      <ExtraItemCard name={"Gardening Tools"} url={"/../public/images/gardening-tools.jpg"}/>
      <ExtraItemCard name={page !== "plants" ? "Plants": "Seeds"} url={`/../public/images/${page !== "plants" ? "Plants": "Seeds"}.jpg`}/>
    </div>
  )
}

export default ExtraItemList