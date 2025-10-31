import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';
import search1 from '/images/Header/search.png';
import Button from '@mui/material/Button';
import letter from '/images/Header/email.png';

const Header = () => {
  const navigate = useNavigate();

  const letter1 = () => {
    alert("Send Latter After Some Years, First Focus on Study");
  };

  const openInNewTab = (path) => (e) => {
    e.preventDefault();
    window.open(path, '_blank');
  };

  return (
    <div className='Header'>
      <div className='sectionS'>
        <div className='sectionA'>
          <button className="section-button">
            <span className="hamburger-icon">
              <span></span>
              <span></span>
              <span></span>
            </span>
            Sections
          </button>
        </div>
        <div className='sectionB'>
          <button style={{ border: 'none', cursor: 'pointer', height: '40px', width: '40px', borderRadius: '6px' }}>
            <img src={search1} style={{ height: '15px', width: '15px', padding: '7px' }} alt="search" />
          </button>
        </div>
      </div>

      <div className="lang">
        <ul>
          <li><a href="/english" className="lang-link" onClick={openInNewTab('/english')}>English</a></li>
          <li><a href="/tamil" className="lang-link" onClick={openInNewTab('/tamil')}>தமிழ்</a></li>
          <li><a href="/bengali" className="lang-link" onClick={openInNewTab('/bengali')}>বাংলা</a></li>
          <li><a href="/malayalam" className="lang-link" onClick={openInNewTab('/malayalam')}>മലയാളം</a></li>
          <li><a href="/gujarati" className="lang-link" onClick={openInNewTab('/gujarati')}>ગુજરાતી</a></li>
          <li><a href="/hindi" className="lang-link" onClick={openInNewTab('/hindi')}>हिंदी</a></li>
          <li><a href="/marathi" className="lang-link" onClick={openInNewTab('/marathi')}>मराठी</a></li>
          <li><a href="/business" className="lang-link" onClick={openInNewTab('/business')}>BUSINESS</a></li>
          <li><a href="/biznes" className="lang-link" onClick={openInNewTab('/biznes')}>बिज़नेस</a></li>
        </ul>
      </div>

      <div className='icon'>
        <div className='icon1'>
          <Button variant="contained" size="small" onClick={letter1}>
            Newsletters <img src={letter} alt="letter" style={{ height: '15px', width: '20px', filter: 'invert(1)', marginLeft: '5px' }} />
          </Button>
        </div>
        <div className='icon2'>
          <a href='https://www.youtube.com/'><img src='https://indianexpress.com/wp-content/themes/indianexpress/images/IE-insta-grey.svg' alt="insta" /></a>
          <a href='https://www.youtube.com/'><img src='https://indianexpress.com/wp-content/themes/indianexpress/images/youtube-icon.svg' alt="youtube" /></a>
          <a href='https://www.youtube.com/'><img src='https://indianexpress.com/wp-content/themes/indianexpress/images/x-header.svg' alt="x" /></a>
          <a href='https://www.youtube.com/'><img src='https://indianexpress.com/wp-content/themes/indianexpress/images/facebook-icon.svg' alt="facebook" /></a>
        </div>
      </div>
    </div>
  );
};

export default Header;