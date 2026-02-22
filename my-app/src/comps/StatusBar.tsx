import React from 'react';
import useOnlineStatus from './useOnlineStatus'; // Import Custom Hook

function StatusBar() {
  const isOnline = useOnlineStatus(); // Sử dụng Custom Hook

  return (
    <div style={{ color: isOnline ? 'green' : 'red', fontWeight: "bold", fontSize: "30px" }}>
      Status: {isOnline ? 'Online' : 'Offline'}
    </div>
  );
}
export default StatusBar;
