import React from 'react';
import HeadingText from './HeadingText';
import Blog from './Blog';
function BlogsList() {
  return (
    <div className="mb-4">
      <div>
        <HeadingText text={'Popular Blogs'} />
      </div>
      <div className="blogsList">
        <div className="blog-component">
          <Blog
            src={'/../public/images/jade-plants.jpg'}
            text={'How to Grow Jade Plants: A Guide on Jade Plant Care'}
          />
        </div>
        <div className="blog-component">
          <Blog
            src={'/../public/images/plant-on-working-desk.jpg'}
            text={'8 Reasons Why You Must Keep a Plant Near Working Area'}
          />
        </div>
        <div className="blog-component">
          <Blog
            src={'/../public/images/plants-inside-room.jpg'}
            text={'Can Indoor Plants Help Reduce Stress Levels'}
          />
        </div>
      </div>
    </div>
  );
}

export default BlogsList;
