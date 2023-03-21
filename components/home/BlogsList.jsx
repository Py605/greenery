import React from 'react';
import HeadingText from './HeadingText';
import Blog from './Blog';
function BlogsList() {
  return (
    <div>
      <div>
        <HeadingText text={"Popular Blogs"}/>
      </div>
      <div className='blogsList'>
        <Blog
          src={'/../public/images/slider-img1.jpg'}
          text={'How to Grow Jade Plants: A Guide on Jade Plant Care'}
          className="blog-component"
        />
        <Blog
          src={'/../public/images/slider-img1.jpg'}
          text={'8 Reasons Why You Must Keep a Plant Near Working Area'}
          className="blog-component"
        />
        <Blog
          src={'/../public/images/slider-img1.jpg'}
          text={'Can Indoor Plants Help Reduce Stress Levels'}
          className="blog-component"
        />
      </div>
    </div>
  );
}

export default BlogsList;
