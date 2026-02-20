function MessageCounter({ unreadCount }) {
  return (
    <div>
      <h2>Xin chào! unreadCount = {unreadCount}</h2>
      {/* Chỉ hiển thị đoạn <p> nếu unreadCount > 0 */}
      {unreadCount > 0 &&
        <p>Bạn có {unreadCount} tin nhắn chưa đọc.</p>
      }
    </div>
  );
}

export default MessageCounter;