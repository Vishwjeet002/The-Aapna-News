import React, { useEffect, useState } from 'react';
import Cards from '../cards/cards';
import './ArticalPage.css'; // ensure this file exists and is imported

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
      <div className="news-grid fixed-grid-loading">
        <div className="loading-placeholder">Loading news...</div>
      </div>
    );
  }

  // After loading: no articles
  if (!articles.length) {
    return (
      <div className="news-grid empty-grid">
        <div className="empty-placeholder">No articles found.</div>
      </div>
    );
  }

  // When we have articles: render the grid of cards
  return (
    <div className="news-grid">
      {articles.map((article, idx) => (
        <Cards key={article.url || idx} article={article} />
      ))}
    </div>
  );
}
