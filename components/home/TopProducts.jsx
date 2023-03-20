import React from 'react';
import Image from 'next/image';
import HeadingText from './HeadingText';
import Product from './Product';

function TopProducts() {
  return (
    <div>
      <HeadingText text="Our Top Products" />
      <div className='parent'>
        <div className='first'>
          <Image src="/../public/images/slider-img1.jpg" width={200} height={340} className="top-products-image-div1"/>
          <Image src="/../public/images/slider-img1.jpg" width={200} height={340} className="top-products-image-div1"/>
        </div>
        <div className='second'>
          <Image src="/../public/images/slider-img1.jpg" width={200} height={100} className="top-products-image-div2"/>
          <Image src="/../public/images/slider-img1.jpg" width={200} height={100} className="top-products-image-div2"/>
          <Image src="/../public/images/slider-img1.jpg" width={200} height={100} className="top-products-image-div2"/>
        </div>
      </div>
    </div>
  );
}

export default TopProducts;
