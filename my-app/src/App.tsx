import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FC01 from './comps/FC01'
import withLoading from './comps/utils'
import MyDataDisplay from './comps/MyDataDisplay'

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
      // Giả lập việc tải dữ liệu
      setTimeout(() => {
        setData("Đây là dữ liệu từ API - " + new Date());
        setLoading(false);
      }, 2000);
    }, []);

  // Áp dụng HOC để tạo component mới có tính năng loading
  const MyDataDisplayWithLoading = withLoading(MyDataDisplay);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>08.Composition-HOCs</h1>
      <div className="card">
        <h1>React-Roadmap (08.Composition-HOCs) - layout Higher-Order Components (HOCs) </h1>
        <a target="_blank" href="https://tuyendung.evotek.vn/ket-hop-component-trong-react-tai-su-dung-that-de-dang-react-roadmap/">https://tuyendung.evotek.vn/ket-hop-component-trong-react-tai-su-dung-that-de-dang-react-roadmap/</a>
      </div>
      <div>
        <h2>Ứng dụng sử dụng HOC</h2>
        {/* Component này giờ đây nhận thêm prop 'isLoading' */}
        <MyDataDisplayWithLoading isLoading={loading} data={data} />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
