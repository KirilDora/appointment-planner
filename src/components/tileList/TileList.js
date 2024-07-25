import React from "react";
import {Tile} from '../tile/Tile';

export const TileList = ({contacts, appointments}) => {
  const items = contacts || appointments || [];
  return (
    <div>
      {items.map((item, index) => (<Tile name={item.name} description={[item.email, item.phone]} 
      key={index}/>))}
    </div>
  );
};
