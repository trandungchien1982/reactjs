import { useState, useEffect } from 'react';
import loadingBar from '../assets/carregando.gif'

function DataFetcherFunctional() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // For Mounting/ Unmounting
  useEffect(() => {
    // TODO: The Mounting Region - START
    console.log('Effect ran: fetching data (simulating componentDidMount)');
    // Tác vụ side effect: Fetch data
    console.log(" -- Try to fetch data ...");
    // TODO: The Mounting Region - END

    // Cleanup function (tương tự componentWillUnmount), sẽ được gọi khi component unmount
    return () => {
      // Unmounting: Call when this component have been removed out of DOM
      console.log('UNMOUNTING - Cleanup function ran (simulating componentWillUnmount)');
      // Ví dụ: Hủy bỏ yêu cầu fetch nếu component unmount trước khi hoàn thành
      // (cần cơ chế hỗ trợ hủy bỏ, ví dụ: AbortController)
    };
  }, []); // Mảng rỗng: effect chỉ chạy một lần sau lần render đầu tiên

  return (
    <>
      <h2>Data Content</h2>
      <div> ... </div>
    </>
  );
}

export default DataFetcherFunctional;