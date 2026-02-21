
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DataFetcherFunctional from './comps/DataFetcherFunctional'

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
      <h1>12.Component-LifeCycle-Unmounting</h1>
      <div className="card">
        <h2>React-Roadmap (12.Component-LifeCycle-Unmounting) - rendering </h2>
        <a target="_blank" href="https://tuyendung.evotek.vn/vong-doi-component-trong-react-tu-khoi-tao-den-ket-thuc-react-roadmap/#Vong_Doi_Component_trong_React_la_gi">https://tuyendung.evotek.vn/vong-doi-component-trong-react-tu-khoi-tao-den-ket-thuc-react-roadmap/#Vong_Doi_Component_trong_React_la_gi</a>
      </div>
      <div>
          <h2>12.Component-LifeCycle-Unmounting</h2>
          <DataFetcherFunctional />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
