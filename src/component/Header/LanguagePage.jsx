import React from 'react';
import { useParams } from 'react-router-dom';

const LanguagePage = () => {
  const { lang } = useParams();

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{decodeURIComponent(lang)} News Page</h1>
      <p>Welcome to the {decodeURIComponent(lang)} section. Here you can find all news and updates in your preferred language.</p>
    </div>
  );
};

export default LanguagePage;
