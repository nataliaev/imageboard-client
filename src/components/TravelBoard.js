import React from "react";

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
    <div
      id={props.id}
      className={props.className}
      onDrop={drop}
      onDragOver={dragOver}
    >
      {props.children}
    </div>
  );
}

export default TravelBoard;
