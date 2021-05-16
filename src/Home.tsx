import React from 'react';
import {Link} from 'react-router-dom';
import comicImg from './images/comicimg.jpg';
import blogImg from './images/blogimg.jpg';
import roverImg from './images/roverimg.jpg';
import codeImg from './images/codeimg.jpg';

function Home() {
  return (
    <div>
      <div className="content-frames">
        <div className="content-frame content-frame-first">
          <Link to="/comics">
            <img src={comicImg} alt="Sketch of a comic book and some comic strips" />
            <div>Comics</div>
          </Link>
        </div>
        <div className="content-frame content-frame-second">
          <a href="https://github.com/chrisccerami/mars-photo-api">
            <img src={roverImg} alt="Sketch of the NASA Mars Rover Curiosity" />
            <div>NASA Mars Rover Photo API</div>
          </a>
        </div>
        <div className="content-frame content-frame-third">
          <a href="https://github.com/chrisccerami">
            <img src={codeImg} alt="Sketch of a laptop with computer code on its screen" />
            <div>Code</div>
          </a>
        </div>
        <div className="content-frame content-frame-fourth">
          <Link to="/blog">
            <img src={blogImg} alt="Sketch of a LiveJournal page with some comments on a blog post" />
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
