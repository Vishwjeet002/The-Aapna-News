import React, { useState, useEffect } from 'react';
import './sliding.css';

const Sliding = () => {
  const [articles, setArticles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  
  useEffect(() => {
    fetch('/api/news')
      .then(response => response.json())
      .then(data => {
        if (data && data.articles && data.articles.length > 0) {
          setArticles(data.articles);
        } else {
          console.error('No valid data returned from API');
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  
  useEffect(() => {
    if (articles.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % articles.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [articles]);

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + articles.length) % articles.length);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % articles.length);
  };

  if (articles.length === 0) {
  return (
    <div className="slider-container">
      <div className="slider">
        <div className="image-container" style={{ background: "#222", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <h2 style={{ color: "white", fontSize: "20px" }}>Loading please wait //// - The Aapna Newa...</h2>
        </div>
      </div>
    </div>
  );
}

  const currentArticle = articles[currentIndex];
  const imageUrl = currentArticle.urlToImage || 'https://via.placeholder.com/600x300';

  return (
    <div className="slider-container">
      <div className="slider">
        <div className="image-container">
          <img src={imageUrl} alt={currentArticle.title} />
        </div>
      </div>

      <div className="content">
        <h3>{currentArticle.title}</h3>
        <p>{currentArticle.description}</p>

       
      </div>
    </div>
  );
};

export default Sliding;
