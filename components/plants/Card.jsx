import Image from 'next/image';
import React from 'react';

function Card() {
  return (
    <div className="card">
      <div>
        <Image
          className="card-img-top"
          src="/../public/images/gardening-girl.jpg"
          width={200}
          height={200}
          alt="Card image cap"
        />
      </div>
      <div className="card-body">
        <h5 className="card-name">Plant Name</h5>
        <p className="card-rate">$100</p>
        <button href="#" className="add-to-cart-btn">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Card;
