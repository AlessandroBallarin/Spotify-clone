import React from "react";
import "./Sidebar.css";

import SidebarOption from "./SidebarOption";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useStateValue } from "../StateProvider";

function Sidebar() {
  const [{ playlists }] = useStateValue();

  return (
    <div className="sidebar">
      {/* Logo di Spotify */}
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
        className="sidebar__logo"
      />
      {/* Tasto Home */}
      <SidebarOption title="Home" Icon={HomeOutlinedIcon} />
      {/* Tasto Cerca */}
      <SidebarOption title="Search" Icon={SearchIcon} />
      {/* Tasto Libreria */}
      <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />

      {/* Lista delle Playlist dell'utente */}
      <br />
      <strong className="sidebar__title">PLAYLIST</strong>
      <hr />

      {playlists?.items?.map((playlist) => (
        <SidebarOption title={playlist.name} />
      ))}
    </div>
  );
}

export default Sidebar;
