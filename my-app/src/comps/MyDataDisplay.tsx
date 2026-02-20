import { useEffect, useState } from 'react'

// Một component cần hiển thị dữ liệu (sẽ được bọc bởi HOC)
function MyDataDisplay({ data }) {
  if (!data) {
    return <p>Không có dữ liệu.</p>;
  }
  return (
    <div>
      <h3>Dữ liệu đã tải:</h3>
      <p>{data}</p>
    </div>
  );
}

export default MyDataDisplay;
