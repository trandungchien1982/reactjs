
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClickComponents from './comps/ClickComponents'
import DoubleClickComponents from './comps/DoubleClickComponents'
import ChangeComponents from './comps/ChangeComponents'
import ClickComponentsStopPropagation from './comps/ClickComponentsStopPropagation'

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
      <h1>16.HandleEvents</h1>
      <div className="card">
        <h2>React-Roadmap (16.HandleEvents) - rendering </h2>
        <a target="_blank" href="https://tuyendung.evotek.vn/xu-ly-su-kien-trong-react-cach-tiep-can-react-way-react-roadmap/">https://tuyendung.evotek.vn/xu-ly-su-kien-trong-react-cach-tiep-can-react-way-react-roadmap/</a>
      </div>
      <div>
          <h2>Content</h2>
          <h3>Click Components</h3>
          <ClickComponents />
          <h3>DoubleClick Components</h3>
          <DoubleClickComponents />
          <h3>Change Components</h3>
          <ChangeComponents />
          <h3>Click Components + Stop Propagation for Main Panel</h3>
          <ClickComponentsStopPropagation />

      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
