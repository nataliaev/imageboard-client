import React from "react";

import { Board } from './styles/Board'

function TravelBoard(props) {
  const drop = e => {
    e.preventDefault();
    const city_id = e.dataTransfer.getData("city_id");

    const city = document.getElementById(city_id);
    city.style.display = "block";

    e.target.appendChild(city);
  };

  const dragOver = e => {
    e.preventDefault();
  };

  return (
    <Board
      id={props.id}
      onDrop={drop}
      onDragOver={dragOver}
    >
      {props.children}
    </Board>
  );
}

export default TravelBoard;
