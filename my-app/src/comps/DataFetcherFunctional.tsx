import React, { useState, useEffect } from 'react';
import loadingBar from '../assets/carregando.gif'

function DataFetcherFunctional() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // A utility function that returns a promise which resolves after a duration
  function wait(duration) {
    return new Promise((resolve) => {
      setTimeout(resolve, duration);
    });
  }

  useEffect(() => {
    console.log('Effect ran: fetching data (simulating componentDidMount)');
    // Tác vụ side effect: Fetch data
    console.log(" -- Try to fetch data ...");

    setTimeout(() => {
      const promise1 = Promise.resolve(123);
      promise1.then((value) => {
          console.log(value);
          setData(value);
          setLoading(false);
          // Expected output: 123
        })
        .catch(error => console.error('Error fetching data:', error));
    }, 2000);


    // Cleanup function (tương tự componentWillUnmount), sẽ được gọi khi component unmount
    return () => {
      console.log('Cleanup function ran (simulating componentWillUnmount)');
      // Ví dụ: Hủy bỏ yêu cầu fetch nếu component unmount trước khi hoàn thành
      // (cần cơ chế hỗ trợ hủy bỏ, ví dụ: AbortController)
    };
  }, []); // Mảng rỗng: effect chỉ chạy một lần sau lần render đầu tiên

  if (loading) {
    return <div style={{border: "2px solid red"}}>
      Đang tải dữ liệu...
      <img src={loadingBar} />
    </div>;
  }
  return <div style={{border: "2px solid cyan", background: "yellow", padding: "10px"}}>Dữ liệu: {JSON.stringify(data)}</div>;
}

export default DataFetcherFunctional;