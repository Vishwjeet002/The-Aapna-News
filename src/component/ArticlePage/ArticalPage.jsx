import React, { useEffect, useState } from 'react';
import Cards from './Cards/Cards';
import './ArticalPage.css';

export default function ArticalPage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    fetch('/api/news')
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then(data => {
        if (!mounted) return;
        setArticles(data.articles || []);
      })
      .catch(err => {
        console.error('Failed to fetch news:', err);
        if (mounted) setArticles([]); // ensure articles is an array on error
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => { mounted = false; };
  }, []);

  // Loading state: keep grid container + fixed height so layout doesn't shift
  if (loading) {
    return (
      <div className="page-container">
        <div className="news-grid fixed-grid-loading">
          <div className="loading-placeholder">Loading news...</div>
        </div>
      </div>
    );
  }

  // After loading: no articles
  if (!articles.length) {
    return (
      <div className="page-container">
        <div className="news-grid empty-grid">
          <div className="empty-placeholder">No articles found.</div>
        </div>
      </div>
    );
  }

  // Split articles into different sections:
  const featured = articles.slice(0, 5);       // top 5
  const secondary = articles.slice(5, 14);     // next 9 (3x3)
  const rest = articles.slice(14);             // remaining

  return (
    <div className="page-container">
      {/* Featured — big row (5 across on desktop) */}
      <section className="section featured-section">
        <h2 className="section-title">Top Stories</h2>
        <div className="featured-grid">
          {featured.map((article, idx) => (
            <Cards key={article.url || `featured-${idx}`} article={article} />
          ))}
        </div>
      </section>

      {/* Secondary — 3-column grid */}
      <section className="section secondary-section">
        <h2 className="section-title">Latest</h2>
        <div className="secondary-grid">
          {secondary.map((article, idx) => (
            <Cards key={article.url || `sec-${idx}`} article={article} />
          ))}
        </div>
      </section>

      {/* Rest — responsive grid */}
      <section className="section rest-section">
        <h2 className="section-title">More News</h2>
        <div className="rest-grid">
          {rest.map((article, idx) => (
            <Cards key={article.url || `rest-${idx}`} article={article} />
          ))}
        </div>
      </section>
    </div>
  );
}
