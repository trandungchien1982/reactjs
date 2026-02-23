
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ThemeContext from './comps/ThemeContext'

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
      <h1>23.useContext</h1>
      <div className="card">
        <h2>React-Roadmap (23.useContext) - Hooks</h2>
        <a target="_blank" href="https://tuyendung.evotek.vn/su-dung-usecontext-de-quan-ly-global-state-mot-lua-chon-khac-ngoai-redux-react-roadmap/">https://tuyendung.evotek.vn/su-dung-usecontext-de-quan-ly-global-state-mot-lua-chon-khac-ngoai-redux-react-roadmap/</a>
      </div>
      <div>
          <h2>Content</h2>
          <h3>useContext-ThemeContext</h3>
          <ThemeContext />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
