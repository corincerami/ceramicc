import React from 'react';
import placeholder from './placeholder.jpg';

function Comics() {
  return (
    <>
      <div className="content-frames">
        <div className="content-frame content-frame-first">
          <img src={placeholder} alt="placeholder" />
          <div>Mars Abandoned</div>
        </div>
        <div className="content-frame content-frame-second">
          <img src={placeholder} alt="placeholder" />
          <div>Lonely Fungus</div>
        </div>
        <div className="content-frame content-frame-third">
          <img src={placeholder} alt="placeholder" />
          <div>Comic Strips</div>
        </div>
        <div className="content-frame content-frame-fourth">
          <img src={placeholder} alt="placeholder" />
          <div>The Grand Journey</div>
        </div>
      </div>
    </>
  );
}

export default Comics;
