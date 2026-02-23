
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Calculator from './comps/Calculator'

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
      <h1>21.useMemo</h1>
      <div className="card">
        <h2>React-Roadmap (21.useMemo) - Hooks</h2>
        <a target="_blank" href="https://tuyendung.evotek.vn/khi-nao-va-vi-sao-nen-dung-usecallback-usememo-va-useref-react-roadmap/#useMemo_Ghi_nho_Memoizing_Gia_tri">https://tuyendung.evotek.vn/khi-nao-va-vi-sao-nen-dung-usecallback-usememo-va-useref-react-roadmap/#useMemo_Ghi_nho_Memoizing_Gia_tri</a>
      </div>
      <div>
          <h2>Content</h2>
          <h3>Calculator with useMemo</h3>
          <Calculator />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
