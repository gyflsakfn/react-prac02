import React from 'react';
import BusniessItem from './BusniessItem';

const BusniessList = ({ data }) => {
  return (
    <ul className="list">
      {
        data.map( item => <BusniessItem key={ item.id } item={item} /> )
      }
    </ul>
  );
};

export default BusniessList;