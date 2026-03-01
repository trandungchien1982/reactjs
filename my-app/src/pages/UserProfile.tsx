import React from 'react';
import { useParams } from 'react-router-dom';

function UserProfile() {
  let { userId } = useParams();

  return (
    <div style={{ border: "5px solid blue", padding: "10px" }}>
      <h2>Thông tin Người dùng #{userId}</h2>
      {/* Fetch dữ liệu người dùng dựa trên userId và hiển thị */}
      <p>Đang tải dữ liệu cho người dùng với ID: {userId}...</p>
    </div>
  );
}

export default UserProfile;