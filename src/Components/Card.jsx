import React, { useContext } from "react";
import { ContextGlobal } from "./utils/global.context";
import "./card.css";

const Card = ({ id, name, username }) => {
  const { state, dispatch } = useContext(ContextGlobal);

  const addFav = () => {
    const fav = { id, name, username };
    dispatch({ type: "ADD_FAV", payload: fav });
    localStorage.setItem(`favDentist_${id}`, JSON.stringify(fav));
  };

  return (
    <div className="card">
      <p>{name}</p>
      <p>{username}</p>
      <button onClick={addFav}>⭐</button>
    </div>
  );
};

export default Card;
