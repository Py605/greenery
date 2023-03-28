import React from 'react';
import Image from 'next/image';
function Blog({ src, text,link }) {
  return (
    <div className="blog-div">
      <div className="image-with-text">
        <Image src={src} width={200} height={100} className="blogs-image" />
      </div>

      <div className="text-with-img">
        <div className="text-wrap-center">
          <div className="heading">{text}</div>
          <a src={link}>
            <button className="read-more-btn">Read Now {'>'}</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Blog;
