import React, { useState, useEffect } from 'react';
import './sliding.css'; 

const Sliding = () => {
  const [articles, setArticles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  
  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=4ce1917c3a334945a33390c7638d9329')
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
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % articles.length);
    }, 5000); 

    return () => clearInterval(interval); 
  }, [articles]);


  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + articles.length) % articles.length);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % articles.length);
  };

  
  if (articles.length === 0) {
    return <div>Loading...</div>;
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
