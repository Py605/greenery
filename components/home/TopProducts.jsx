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
          <Image src="/../public/images/flowering-plants.jpg" width={200} height={340} className="top-products-image-div1"/>
          <Image src="/../public/images/indoor-plants.jpg" width={200} height={340} className="top-products-image-div1"/>
        </div>
        <div className='second'>
          <Image src="/../public/images/low-maintanence-plants.jpg" width={200} height={100} className="top-products-image-div2"/>
          <Image src="/../public/images/bonsai-plants.jpg" width={200} height={100} className="top-products-image-div2"/>
          <Image src="/../public/images/herbs-plants.jpg" width={200} height={100} className="top-products-image-div2"/>
        </div>
      </div>
    </div>
  );
}

export default TopProducts;
