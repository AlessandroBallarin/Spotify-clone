import React from "react";
import "./Footer.css";

import ShuffleIcon from "@material-ui/icons/Shuffle";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import RepeatIcon from "@material-ui/icons/Repeat";

import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import { Grid, Slider } from "@material-ui/core";

function Footer() {
  return (
    <div className="footer">
      {/* Sezione sinistra: Contiene le informazioni dell'album e della canzone */}
      <div className="footer__left">
        <img src="" alt="" className="footer__songImage" />
        <div className="footer__songInfo">
          <h4>Titolo della canzone</h4>
          <p>descrizione</p>
        </div>
      </div>

      {/* Sezione centrale: Contiene i bottoni per controllare la canzone */}
      <div className="footer__center">
        <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon className="footer__icon" />
        <PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
        <SkipNextIcon className="footer__icon" />
        <RepeatIcon className="footer__green" />
      </div>

      {/* Sezione destra: Contiene i bottoni per regolare il volume */}
      <div className="footer__right">
        <Grid container spacing={2} className="footer__slider">
          <Grid item>
            <PlaylistPlayIcon className="footer__icon" />
          </Grid>
          <Grid item>
            <VolumeDownIcon className="footer__icon" />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
