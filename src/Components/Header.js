import React from "react";
import "./Header.css";

import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { useStateValue } from "../StateProvider";

function Header() {
  const [{ user }] = useStateValue();

  return (
    <div className="header">
      {/* Sezione sinistra: Contiene la barra di ricerca */}
      <div className="header__left">
        <SearchIcon />
        <input type="text" placeholder="Search for Artists, Songs or Podcast" />
      </div>

      {/* Sezione destra: contiene l'immagine profilo e il nome */}
      <div className="header__right">
        <Avatar src={user?.images[0]?.url} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
