import useOnlineStatus from './useOnlineStatus'; // Import Custom Hook

function SaveButton() {
  const isOnline = useOnlineStatus(); // Sử dụng Custom Hook ở component khác

  const handleSave = () => {
    // Logic lưu dữ liệu...
    console.log('Saving data... at time: ' + new Date());
  };

  return (
    <button onClick={handleSave} disabled={!isOnline}>
      {isOnline ? 'Save Data' : 'Cannot Save (Offline)'}
    </button>
  );
}

export default SaveButton;