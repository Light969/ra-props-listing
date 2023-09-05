import React from 'react';
import PropTypes from 'prop-types';

export default function Card({item}) {
  if (item.state === 'removed') {
    return null;
  }

  const {url, MainImage, title, currency_code = '', price = '', quantity = 0} = item;
  const cardTitle = title?.length > 49 ? title.slice(0, 50) + '...' : title;

  let cost;
  if (['USD', 'EUR'].includes(currency_code)) {
    cost = currency_code === 'USD' ? `$ ${price}` : `€ ${price}`;
  } else {
    cost = `${price} ${currency_code}`;
  }

  let levelClass = '';
  if (quantity) {
    if (quantity <= 10) {
      levelClass = 'low';
    } else if (quantity <= 20) {
      levelClass = 'medium';
    } else {
      levelClass = 'high';
    }
  }

  return (
    <div className="item">
      <div className="item-image">
        <a href={url}>
          <img src={MainImage?.url_570xN} alt={cardTitle}/>
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{cardTitle}</p>
        <p className="item-price">{cost}</p>
        <p className={`item-quantity level-${levelClass}`}>{quantity} left</p>
      </div>
    </div>
  )
}

Card.propTypes = {
  item: PropTypes.object.isRequired
}