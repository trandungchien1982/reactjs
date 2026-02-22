
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './comps/Button'
import Parent from './comps/Parent'
import ParentWithCallback from './comps/ParentWithCallback'

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
      <h1>20.useCallback</h1>
      <div className="card">
        <h2>React-Roadmap (20.useCallback) - Hooks</h2>
        <a target="_blank" href="https://tuyendung.evotek.vn/khi-nao-va-vi-sao-nen-dung-usecallback-usememo-va-useref-react-roadmap/#useCallback_Ghi_nho_Memoizing_Ham">https://tuyendung.evotek.vn/khi-nao-va-vi-sao-nen-dung-usecallback-usememo-va-useref-react-roadmap/#useCallback_Ghi_nho_Memoizing_Ham</a>
      </div>
      <div>
          <h2>Content</h2>
          <h3>Parent - normal - Make Parent re-render and then all buttons re-render: [Click Me], [Another Button]</h3>
          <Parent />

          <hr/>
          <h3>Parent with useCallback - Parent re-render and then only inner buttons re-render: [Another Button]</h3>
          <ParentWithCallback />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
