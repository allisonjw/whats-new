/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './NewsArticle.scss';

const NewsArticle = ({ image, headline, description, url }) => (
  <article>
    <img src={image} alt="" />
    <h3>{ headline }</h3>
    <p>{ description }</p>
    <footer>
      <a href={url}>
      See full article
      </a>
    </footer>
  </article>
);


export default NewsArticle;