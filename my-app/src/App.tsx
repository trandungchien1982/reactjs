
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import FocusInput from './comps/FocusInput'
import ScrollToDiv from './comps/ScrollToDiv'
import Timer from './comps/Timer'
import ParentComponentFW from './comps/ParentComponentFW'

function App() {
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
      <h1>15.useRef</h1>
      <div className="card">
        <h2>React-Roadmap (15.useRef) - rendering </h2>
        <a target="_blank" href="https://tuyendung.evotek.vn/refs-trong-react-la-gi-truy-cap-dom-truc-tiep-dung-cach-react-roadmap/#Refs_la_gi_trong_React">https://tuyendung.evotek.vn/refs-trong-react-la-gi-truy-cap-dom-truc-tiep-dung-cach-react-roadmap/#Refs_la_gi_trong_React</a>
      </div>
      <div>
          <h2>Content</h2>
          <h3>FocusInput</h3>
          <FocusInput />

          <h3>ScrollToDiv</h3>
          <ScrollToDiv />

          <h3>Timer</h3>
          <Timer />

          <h3>ParentComponentFW - forwardRef</h3>
          <ParentComponentFW />

      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
