import React from 'react';
import {Link} from 'react-router-dom';
import placeholder from './placeholder.jpg';

function Home() {
  return (
    <div>
      <div className="content-frames">
        <div className="content-frame content-frame-first">
          <Link to="/comics">
            <img src={placeholder} alt="placeholder" />
            <div>Comics</div>
          </Link>
        </div>
        <div className="content-frame content-frame-second">
          <a href="https://github.com/chrisccerami/mars-photo-api">
            <img src={placeholder} alt="placeholder" />
            <div>Mars Rover Photos API</div>
          </a>
        </div>
        <div className="content-frame content-frame-third">
          <a href="https://github.com/chrisccerami">
            <img src={placeholder} alt="placeholder" />
            <div>Code</div>
          </a>
        </div>
        <div className="content-frame content-frame-fourth">
          <Link to="/blog">
            <img src={placeholder} alt="placeholder" />
            <div>Blog</div>
          </Link>
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
