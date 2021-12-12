import React, { useEffect } from "react";
import "./App.css";
import Home from "./Home";
import Login from "./Login";
import SpotifyWebApi from "spotify-web-api-js";

import { getTokenFromResponse } from "./spotify";
import { useStateValue } from "./StateProvider";

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useStateValue();

  //Esegue il codice data una certa condizione
  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    const token = hash.access_token;

    //Inserisco il token del DataLayer
    if (token) {
      spotify.setAccessToken(token);

      dispatch({
        type: "SET_TOKEN",
        token: token,
      });

      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify,
      });

      //Inserisco la playlist corrente nel datalayer
      spotify.getPlaylist(`6CnJEb05V6nrTXYCx4Ijs3`).then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );

      //Inserisco l'oggetto user nel DataLayer
      spotify.getMe().then((user) => {
        //Inserisco lo User dentro il DataLayer
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      //Ottengo le playlist dell'utente
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLIST",
          playlists: playlists,
        });
      });
    }
  }, []);

  return <div className="app">{token ? <Home /> : <Login />}</div>;
}

export default App;
