
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './comps/Counter'

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
          <h3>Redux Toolkit - Slice Cnt</h3>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
