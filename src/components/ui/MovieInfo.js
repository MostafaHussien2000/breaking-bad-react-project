import React from "react";
import { FiTv } from "react-icons/fi";

/*Import Ion-Icons
=============================*/
import { Tv, Time } from "react-ionicons";

function MovieInfo() {
  return (
    <main>
      <div className="top-info">
        <FiTv color="#E8DA0E" />
        <Time />
      </div>
      <h1>Breaking Bad</h1>
    </main>
  );
}

export default MovieInfo;
