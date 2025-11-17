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
    source,
    publishedAt
  } = article;

  const handleImgError = (e) => {
    e.currentTarget.src = PLACEHOLDER;
  };

  const openUrl = (e) => {
    // allow middle-click / ctrl+click default behavior; only prevent for normal left click
    if (e.type === 'click' && url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const prettyDate = publishedAt ? new Date(publishedAt).toLocaleString() : null;

  return (
    <article
      className="news-card"
      onClick={openUrl}
      role={url ? 'link' : 'article'}
      tabIndex={0}
      onKeyDown={(e) => { if ((e.key === 'Enter' || e.key === ' ') && url) openUrl(e); }}
      aria-label={title || 'News article'}
    >
      <div className="news-card__image-wrap" aria-hidden={false}>
        <img
          className="news-card__image"
          src={urlToImage || PLACEHOLDER}
          alt={title || 'news image'}
          onError={handleImgError}
          loading="lazy"
        />
        <div className="news-card__badge">
          <span className="news-card__source">{(source && source.name) || 'Unknown'}</span>
          {prettyDate && <span className="news-card__date">{prettyDate.split(',')[0]}</span>}
        </div>
      </div>

      <div className="news-card__body">
        <h4 className="news-card__title">{title || 'Untitled'}</h4>
        <p className="news-card__desc">{description || 'No description available.'}</p>
      </div>

      <div className="news-card__footer">
        {url ? (
          <a
            className="news-card__readmore"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()} /* prevent double opening */
          >
            Read more ↗
          </a>
        ) : (
          <span className="news-card__no-link">No external link</span>
        )}
      </div>
    </article>
  );
}
