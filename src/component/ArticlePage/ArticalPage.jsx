import React, { useEffect, useState } from 'react';
import Card from './Card';
import './cards.css'; // ensure this is imported once

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
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => { mounted = false; };
  }, []);

  if (loading) return <div style={{ padding: 20 }}>Loading news...</div>;
  if (!articles.length) return <div style={{ padding: 20 }}>No articles found.</div>;

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))',
      gap: '16px',
      padding: '16px'
    }}>
      {articles.map((article, idx) => (
        <Card key={article.url || idx} article={article} />
      ))}
    </div>
  );
}
