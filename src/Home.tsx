import React from 'react';
import placeholder from './placeholder.jpg';

function Home() {
  return (
    <div>
      <div className="content-frames">
        <div className="content-frame content-frame-first">
          <img src={placeholder} alt="placeholder" />
          <div>Comics</div>
        </div>
        <div className="content-frame content-frame-second">
          <img src={placeholder} alt="placeholder" />
          <div>Mars Rover Photos API</div>
        </div>
        <div className="content-frame content-frame-third">
          <img src={placeholder} alt="placeholder" />
          <div>Code</div>
        </div>
        <div className="content-frame content-frame-fourth">
          <img src={placeholder} alt="placeholder" />
          <div>Blog</div>
        </div>
      </div>
      <div className="content-bottom">
        <div>Contact Info</div>
        <div><a href="https://twitter.com/chrisccerami">Twitter</a></div>
        <div><a href="mailto:chrisccerami@gmail.com">Email</a></div>
      </div>
    </div>
  );
}

export default Home;
