import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./utils/global.context";

const Navbar = () => {
  const { state, dispatch } = useGlobalContext();

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <nav>
      <div className="nav">
      <div className="logo">DH odonto</div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/favs">Favs</Link>
          </li>
        </ul>
        <button onClick={toggleTheme}>CAMBIAR TEMA</button>
      </div>
    </nav>
  );
};

export default Navbar;
