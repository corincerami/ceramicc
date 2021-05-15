import React from 'react';
import {Link} from 'react-router-dom';
import placeholder from './placeholder.jpg';

function Comics() {
  return (
    <>
      <div className="content-frames">
        <div className="content-frame content-frame-first">
          <Link to="/comics/lonely-fungus/1">
            <img src="/comics/lonely-fungus/lonely-fungus-1.png" alt="First page of the comic Lonely Fungus, depicting a mushroom in a forest" />
            <div>Lonely Fungus</div>
          </Link>
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
