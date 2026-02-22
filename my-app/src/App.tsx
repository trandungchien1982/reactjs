
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StatusBar from './comps/StatusBar'
import SaveButton from './comps/SaveButton'

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
      <h1>19.CustomHook.useOnlineStatus</h1>
      <div className="card">
        <h2>React-Roadmap (19.CustomHook.useOnlineStatus) - Hooks</h2>
        <a target="_blank" href="https://tuyendung.evotek.vn/tao-custom-hooks-trong-react-bien-tai-su-dung-ma-thanh-nghe-thuat-react-roadmap/#Vi_Du_Thuc_Te_Hon_useOnlineStatus">https://tuyendung.evotek.vn/tao-custom-hooks-trong-react-bien-tai-su-dung-ma-thanh-nghe-thuat-react-roadmap/#Vi_Du_Thuc_Te_Hon_useOnlineStatus</a>
      </div>
      <div>
          <h2>Content</h2>
          <h3>StatusBar with CustomHooks - useOnlineStatus</h3>
          <StatusBar />

          <hr/>
          <h3>SaveButton with CustomHooks - useOnlineStatus</h3>
          <SaveButton />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
