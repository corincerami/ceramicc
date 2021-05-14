import React from 'react';
import placeholder from './placeholder.jpg';
import { useParams } from "react-router-dom";

interface ParamTypes {
  title: string
  page: string
}

function Comic() {
  let { title, page } = useParams<ParamTypes>();
  return (
    <div className="comic-content">
      <div className="comic-title">{title}</div>
      <div className="comic-page">
        <img src={placeholder} alt="placeholder" />
      </div>
    </div>
  );
}

export default Comic;
