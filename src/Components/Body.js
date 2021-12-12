import React from "react";
import { useStateValue } from "../StateProvider";
import "./Body.css";
import Header from "./Header";
import SongRow from "./SongRow";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function Body() {
  const [{ discover_weekly, spotify }, dispatch] = useStateValue();

  return (
    <div className="body">
      <Header />

      {/* Banner con informazioni sulla playlist */}
      <div className="body__info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>{discover_weekly?.name}</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      {/* Lista delle canzoni */}
      <div className="body__songs">
        {/* Icone */}
        <div className="body__icons">
          <PlayCircleFilledIcon className="body__shuffle body__greenIcon" />
          <FavoriteIcon fontSize="large" className="body__greenIcon" />
          <MoreHorizIcon />
        </div>

        {/* Songs list */}
        {discover_weekly?.tracks.items.map((item) => (
          <SongRow track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;
