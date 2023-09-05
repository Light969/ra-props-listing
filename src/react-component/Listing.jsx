import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

export default function Listing({items}) {
  return (
    <div className="item-list">
      {items.map(item => <Card key={item.listing_id} item={item} />)}
    </div>
  )
}

Listing.defaulProps = {
  items: []
};

Listing.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object)
};