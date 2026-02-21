import { useState, useEffect } from 'react';
import loadingBar from '../assets/carregando.gif'

function DataFetcherFunctional() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [var01, setVar01] = useState<number>(0);
  const [var02, setVar02] = useState<number>(0);
  const [var03, setVar03] = useState<number>(0);

  const upd01 = () => {
    setVar01(var01+1);
  };
  const upd02 = () => {
    setVar02(var02+1);
  };
  const upd03 = () => {
    setVar03(var03+1);
  };

  // For Mounting
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

  // For Updating when var01, var02, var03 is not undefined
  useEffect(() => {
      console.log(`Call LifeCycle-Updating - TRIPLE: ... var01: ${var01}, var02: ${var02}, var03: ${var03}`);
      if (var01 && var02 && var03) {
        // Process update:
        console.log(" -- Action TRIPLE for var01, var02, var03: ALL DEFINED...");
      }
    }, [var01, var02, var03]); // Execute moi khi thay doi var01, var02, var03


    // For Updating when var01, var02 is not undefined
    useEffect(() => {
        console.log(`Call LifeCycle-Updating - TWIN: ... var01: ${var01}, var02: ${var02}, var03: ${var03}`);
        if (var01 && var02) {
          // Process update:
          console.log(" -- Action TWIN for var01, var02, var03: ... ");
        }
      }, [var01, var02]); // Execute moi khi thay doi var01, var02


  return (
    <>
      <h2>Data Content</h2>
      {loading && (
        <div style={{border: "2px solid red"}}>
            Đang tải dữ liệu...
            <img src={loadingBar} />
        </div>
      )}

      {!loading && (
        <div style={{border: "2px solid cyan", background: "yellow", padding: "10px"}}>Dữ liệu: {JSON.stringify(data)}</div>
      )}

      <h2>Updating data ...</h2>
      <p><button onClick={upd01}>var01++: {var01}</button></p>
      <p><button onClick={upd02}>var02++: {var02}</button></p>
      <p><button onClick={upd03}>var03++: {var03}</button></p>
      <div></div>
    </>
  );
}

export default DataFetcherFunctional;