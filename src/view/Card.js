import React from "react";
const date = new Date();
const year = date.getFullYear();

function Card(props) {
  const { name, id } = props;
  return (
    <div className="card">
      <h1>{year} </h1>
      <h2>{name}</h2>
      <h2>{id}</h2>
    </div>
  );
}
export default Card;
