import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FC01 from './comps/FC01'
import Greetings from './comps/Greetings'
import MessageCounter from './comps/MessageCounter'
import PageLayout from './comps/PageLayout'

function App() {
  const [count, setCount] = useState(0)
  const [currentPrice, setCurrentPrice] = useState(120);

  const currentUser = { name: 'John Doe' }; // Giả định dữ liệu người dùng

    // Tạo các element/component cho từng khu vực
    const pageHeader = (
      <div>
        <h1>Tiêu đề Trang của Tôi</h1>
        <p>Chào mừng, {currentUser.name}!</p>
      </div>
    );

    const pageFooter = (
      <div>
        <p>Bản quyền © 2023 Công ty ABC.</p>
        <a href="/privacy">Chính sách Bảo mật</a>
      </div>
    );

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
      <h1>07. Composition</h1>
      <div className="card">
        <h1>React-Roadmap (Composition) - layout via props.children, props.header, props.footer</h1>
        <a target="_blank" href="https://tuyendung.evotek.vn/ket-hop-component-trong-react-tai-su-dung-that-de-dang-react-roadmap/">https://tuyendung.evotek.vn/ket-hop-component-trong-react-tai-su-dung-that-de-dang-react-roadmap/</a>
      </div>
      <div>
        Noi dung tiep theo ...
      </div>
      <div>
        <PageLayout
            header={pageHeader} // Truyền element vào prop 'header'
            footer={pageFooter} // Truyền element vào prop 'footer'
         >
            {/* Nội dung chính của trang, sẽ trở thành props.children */}
            <section>
              <h2>Đây là phần nội dung chính</h2>
              <p>Các đoạn văn, hình ảnh và các component khác đi vào đây...</p>
            </section>
            <section>
              <h2>Một phần khác</h2>
              <p>Thêm nội dung...</p>
            </section>
          </PageLayout>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
