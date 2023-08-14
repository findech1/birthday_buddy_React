import React from "react";

const List = ({ friend }) => {
  const { name, age, image } = friend;

  return (
    <article className="person">
      <img className="img" src={image} alt={name} />
      <div>
        <h4>{name}</h4>
        <p>{age} Years</p>
      </div>
    </article>
  );
};

export default List;
