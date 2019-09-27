import React from "react";

import { CityDraggable } from './styles/Board'

function City(props) {
  
  const dragStart = e => {
    const target = e.target;

    e.dataTransfer.setData('city_id', target.id)

    setTimeout(() => {
      target.style.display = "none"
    }, 0)
  }

  const dragOver = e => {
    e.stopPropagation()
  }

  return (
    <CityDraggable
      id={props.id}
      draggable = "true"
      onDragStart={dragStart}
      onDragOver={dragOver}
    >
      {props.children}
    </CityDraggable>
  );
}

export default City;
