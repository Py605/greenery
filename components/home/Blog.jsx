import React from 'react';
import Image from 'next/image';
function Blog({ src, text }) {
  return (
    <div className="blog-div">
      <div className="image-with-text">
        <Image
          src="/../public/images/gardening-girl.jpg"
          width={200}
          height={100}
          className="blogs-image"
        />
      </div>

      <div className="text-with-img">
        <div className="text-wrap-center">
          <div className="heading">{text}</div>
          <div className="read-more-btn">
            <p>Read Now {'>'} </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
