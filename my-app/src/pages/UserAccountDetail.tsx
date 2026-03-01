import React from 'react';
import { useParams } from 'react-router-dom';

function UserProfile() {
  let { userId, accountName } = useParams();

  return (
    <div style={{ border: "3px solid magenta", padding: "10px" }}>
      <h2>Thông tin Người dùng #{userId}, account: #{accountName}</h2>
      {/* Fetch dữ liệu người dùng dựa trên userId và hiển thị */}
      <p>Đang tải dữ liệu cho người dùng với ID: {userId}, <br />Account: {accountName}</p>
    </div>
  );
}

export default UserProfile;