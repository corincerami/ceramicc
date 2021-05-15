import React from 'react';
import { useParams } from "react-router-dom";
import comicJson from './comic-data.json';
import {Link} from 'react-router-dom';

interface ParamTypes {
  slug: string
  page: string
}

type ComicData = {
  title: string
  date: string
  pages: number
  description: string
  altText: string[]
}

interface ComicJson {
  [slug: string]: ComicData;
}

function Comic() {
  const { slug, page } = useParams<ParamTypes>();
  const comic = (comicJson as ComicJson)[slug];
  const imgSrc = `/comics/${slug}/${slug}-${page}.png`;

  return (
    <div className="comic-content">
      <div className="comic-title">
        <h2>{comic.title}</h2>
        <div className="comic-page-number">Page {page}</div>
      </div>
      <div className="comic-page">
        <img src={imgSrc} alt={comic.altText[Number.parseInt(page)]} />
      </div>
      <div className="comic-pagination">
        <span className="previous-page">{previousPageLink(page, slug)}</span>
        <span className="next-page">{nextPageLink(page, slug, comic)}</span>
      </div>
    </div>
  );
}

function previousPageLink(page: string, slug: string) {
  if (Number.parseInt(page) > 1) {
    return <Link to={`/comics/${slug}/${Number.parseInt(page) - 1}`}>Previous</Link>;
  } else {
    return <></>
  }
}

function nextPageLink(page: string, slug: string, comic: ComicData) {
  if (Number.parseInt(page) == comic.pages) {
    return <></>;
  } else {
    return <Link to={`/comics/${slug}/${Number.parseInt(page) + 1}`}>Next</Link>;
  }
}

export default Comic;
