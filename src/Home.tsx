import React from 'react';
import {Link} from 'react-router-dom';
import comicImg from './images/comicimg.jpg';
import blogImg from './images/blogimg.jpg';
import roverImg from './images/roverimg.jpg';
import codeImg from './images/codeimg.jpg';
import comicLabel from './images/comicslabel.png';
import apiLabel from './images/apilabel.png';
import codeLabel from './images/codelabel.png';
import blogLabel from './images/bloglabel.png';

function Home() {
  const labelImgStyles = {maxHeight: "100px"}
  return (
    <div>
      <div className="content-frames">
        <div className="content-frame content-frame-first">
          <Link to="/comics">
            <img src={comicImg} alt="Sketch of a comic book and some comic strips" />
            <div><img src={comicLabel} alt="Click here to view my comics" style={labelImgStyles}></img></div>
          </Link>
        </div>
        <div className="content-frame content-frame-second">
          <a href="https://github.com/chrisccerami/mars-photo-api">
            <img src={roverImg} alt="Sketch of the NASA Mars Rover Curiosity" />
            <div><img src={apiLabel} alt="Click here to go to the NASA Mars Rover Photo API" style={labelImgStyles}></img></div>
          </a>
        </div>
        <div className="content-frame content-frame-third">
          <a href="https://github.com/chrisccerami">
            <img src={codeImg} alt="Sketch of a laptop with computer code on its screen" />
            <div><img src={codeLabel} alt="Click here to go to my GitHub page and view code I've written" style={labelImgStyles}></img></div>
          </a>
        </div>
        <div className="content-frame content-frame-fourth">
          <Link to="/blog">
            <img src={blogImg} alt="Sketch of a LiveJournal page with some comments on a blog post" />
            <div><img src={blogLabel} alt="Click here to go to my blog" style={labelImgStyles}></img></div>
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
