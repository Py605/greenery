import React from 'react';
import Image from 'next/image';

function ExploreListItem({ link }) {
  return (
    <div>
      <div className="image">
        <Image
          src={link}
          alt="some picture"
          width={100}
          height={100}
          priority
        />
      </div>
    </div>
  );
}

export default ExploreListItem;
