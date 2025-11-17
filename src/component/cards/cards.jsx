import React from 'react';
import './Cards.css';

const PLACEHOLDER = 'https://via.placeholder.com/400x220?text=No+Image';

export default function Cards({ article }) {
  if (!article) return null;

  const {
    title,
    description,
    urlToImage,
    url,
    source
  } = article;

  const handleImgError = (e) => {
    e.currentTarget.src = PLACEHOLDER;
  };

  return (
    <article className="news-card" onClick={() => url && window.open(url, '_blank')}>
      <div className="news-card__image-wrap">
        <img
          className="news-card__image"
          src={urlToImage || PLACEHOLDER}
          alt={title || 'news image'}
          onError={handleImgError}
          loading="lazy"
        />
      </div>

      <div className="news-card__body">
        <h4 className="news-card__title">{title || 'Untitled'}</h4>
        <p className="news-card__desc">{description || 'No description available.'}</p>
      </div>

      <div className="news-card__footer">
        <span className="news-card__source">{(source && source.name) || 'Unknown'}</span>
      </div>
    </article>
  );
}
