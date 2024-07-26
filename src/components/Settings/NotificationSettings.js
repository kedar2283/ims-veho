import React, { useState } from 'react';

const NotificationSettings = () => {
  const [enableNotifications, setEnableNotifications] = useState(true);

  const toggleNotifications = () => {
    setEnableNotifications(!enableNotifications);
    
  };

  return (
    <div className="settings-container">
      <h2>Notification Settings</h2>
      <label>
        Enable Notifications
        <input
          type="checkbox"
          checked={enableNotifications}
          onChange={toggleNotifications}
        />
      </label>
      
    </div>
  );
};

export default NotificationSettings;
