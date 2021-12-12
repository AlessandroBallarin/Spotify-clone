import React from "react";
import "./Home.css";

import Sidebar from "./Components/Sidebar";
import Body from "./Components/Body";
import Footer from "./Components/Footer";

function Home() {
  return (
    <div className="home">
      <div className="home__body">
        {/* Sidebar */}
        <Sidebar />

        {/* Body */}
        <Body />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
