import React, { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";
import Card from "../Components/Card";

const Favs = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <main className={state.theme}>
      <h1>Favoritos</h1>
      <div className="card-grid">
        {state.favorites.map((fav) => (
          <Card
            key={fav.id}
            id={fav.id}
            name={fav.name}
            username={fav.username}
          />
        ))}
      </div>
    </main>
  );
};

export default Favs;
