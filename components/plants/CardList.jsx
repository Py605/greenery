import React from 'react';
import Card from './Card';

function CardList({ page }) {
  const source =
    page === 'plants' ? 'gardening-girl' : 'seeds/common-seed-image';
  return (
    <div class="card-container">
      <div className="card-list">
        <Card
          url={`/../public/images/${source}.jpg`}
          page={page}
          className="card"
        />
      </div>
      <div className="card-list">
        <Card
          url={`/../public/images/${source}.jpg`}
          page={page}
          className="card"
        />
      </div>
      <div className="card-list">
        <Card
          url={`/../public/images/${source}.jpg`}
          page={page}
          className="card"
        />
      </div>
      <div className="card-list">
        <Card
          url={`/../public/images/${source}.jpg`}
          page={page}
          className="card"
        />
      </div>
      <div className="card-list">
        <Card
          url={`/../public/images/${source}.jpg`}
          page={page}
          className="card"
        />
      </div>
      <div className="card-list">
        <Card
          url={`/../public/images/${source}.jpg`}
          page={page}
          className="card"
        />
      </div>
      <div className="card-list">
        <Card
          url={`/../public/images/${source}.jpg`}
          page={page}
          className="card"
        />
      </div>
      <div className="card-list">
        <Card
          url={`/../public/images/${source}.jpg`}
          page={page}
          className="card"
        />
      </div>
      <div className="card-list">
        <Card
          url={`/../public/images/${source}.jpg`}
          page={page}
          className="card"
        />
      </div>
      <div className="card-list">
        <Card
          url={`/../public/images/${source}.jpg`}
          page={page}
          className="card"
        />
      </div>
      <div className="card-list">
        <Card
          url={`/../public/images/${source}.jpg`}
          page={page}
          className="card"
        />
      </div>
      <div className="card-list">
        <Card
          url={`/../public/images/${source}.jpg`}
          page={page}
          className="card"
        />
      </div>
    </div>
  );
}

export default CardList;
