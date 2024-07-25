import React from "react";

export const Tile = (props) => {
  return (
    <div className="tile-container">
      <p className='tile-tile'>{props.name}</p>
      <p className="tile">{props.description.join(' ')}</p>
    </div>
  );
};
