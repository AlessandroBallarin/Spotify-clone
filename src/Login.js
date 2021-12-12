import React from "react";
import "./Login.css";

import { loginUrl } from "./spotify";

function Login() {
  return (
    <div className="login">
      {/* Spotify Logo */}
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
        className="login__img"
      />

      {/* Spotify login button */}
      <a href={loginUrl} className="login__button">
        LOGIN WITH SPOTIFY
      </a>
    </div>
  );
}

export default Login;
