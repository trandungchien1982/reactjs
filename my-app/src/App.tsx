
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CounterDisplay from './comps/CounterDisplay'
import CounterDisplayX10 from './comps/CounterDisplayX10'
import CounterButton from './comps/CounterButton'

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
      <h1>24.reduxToolkit.CounterSlice</h1>
      <div className="card">
        <h2>React-Roadmap (24.reduxToolkit.CounterSlice) - Global State with slice</h2>
        <a target="_blank" href="https://tuyendung.evotek.vn/bat-dau-voi-redux-toolkit-redux-gio-that-de-dang-react-roadmap/#Tich_Hop_Redux_Toolkit_Vao_React_App">https://tuyendung.evotek.vn/bat-dau-voi-redux-toolkit-redux-gio-that-de-dang-react-roadmap/#Tich_Hop_Redux_Toolkit_Vao_React_App</a>
      </div>
      <div>
          <h2>Content</h2>
          <div style={{ background: "cyan"}}>
            <h3>Counter Display</h3>
            <CounterDisplay />
          </div>

          <hr />

          <div style={{ background: "lightgreen"}}>
            <h3>Counter Buttons</h3>
            <CounterButton />
          </div>

          <hr />


          <div style={{ background: "lightyellow"}}>
            <h3>Counter Display X10</h3>
            <CounterDisplayX10 />
          </div>

      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
