import React, { useState, useEffect } from 'react';
import './MainHeading.css';
import headlogo from '/images/MainHeading/Heading.png';
import india from '/images/MainHeading/flag.png';
import inter from '/images/MainHeading/map.png';

function MainHeading() {
  const [selected, setSelected] = useState('India');
  const [showOptions, setShowOptions] = useState(false);
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedDate = dateTime.toLocaleDateString('en-IN', {
     year: 'numeric',
    weekday: 'long',

    month: 'long',
   
  
    
   
  });

  const formattedTime = dateTime.toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  const options = [
    { label: 'India', image: india },
    { label: 'International', image: inter },
  ];

  const handleSelect = (option) => {
    setSelected(option.label);
    setShowOptions(false);
  };

  return (
    <div className="MainH">
      <div className="left">
        <div className="first">
          <div className="texti">
            <p>EDITOR</p>
          </div>

          <div className="custom-dropdown">
            <div className="selected" onClick={() => setShowOptions(!showOptions)}>
              <img src={options.find((o) => o.label === selected).image} alt={selected} />
              <span>{selected}</span>
              <span className="arrow">&#9662;</span>
            </div>
            {showOptions && (
              <ul className="options">
                {options.map((option, index) => (
                  <li key={index} onClick={() => handleSelect(option)}>
                    <img src={option.image} alt={option.label} />
                    <span>{option.label}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="second">
          <div >{formattedDate},</div>
          <div style={{paddingLeft:'5px'}}>{formattedTime}</div>
        </div>
      </div>

      <div className="right">
        <img src={headlogo} alt="Heading Logo" />
      </div>
    </div>
  );
}

export default MainHeading;
