
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './comps/Counter'
import Counter2NewLayout from './comps/Counter2NewLayout'

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
      <h1>18.CustomHook.useCounter</h1>
      <div className="card">
        <h2>React-Roadmap (18.CustomHook.useCounter) - Hooks</h2>
        <a target="_blank" href="https://tuyendung.evotek.vn/tao-custom-hooks-trong-react-bien-tai-su-dung-ma-thanh-nghe-thuat-react-roadmap/#Custom_Hooks_La_Gi">https://tuyendung.evotek.vn/tao-custom-hooks-trong-react-bien-tai-su-dung-ma-thanh-nghe-thuat-react-roadmap/#Custom_Hooks_La_Gi</a>
      </div>
      <div>
          <h2>Content</h2>
          <h3>Counter with CustomHooks - useCounter</h3>
          <Counter />
          <hr/>
          <h3>Counter2NewLayout with CustomHooks - useCounter</h3>
          <Counter2NewLayout />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
