import React, { useState } from 'react';

const GeneralSettings = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    
  };

  return (
    <div className={`settings-container ${darkMode ? 'dark-mode' : ''}`}>
      <h2>General Settings</h2>
      <label>
        Dark Mode
        <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
      </label>
  
    </div>
  );
};

export default GeneralSettings;
