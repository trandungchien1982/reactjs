
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MouseDisplayWithHooks from './comps/MouseDisplayWithHooks'

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
      <h1>14.UseHooks.InsteadOf.HOCs.RenderProps</h1>
      <div className="card">
        <h2>React-Roadmap (14.UseHooks.InsteadOf.HOCs.RenderProps) - rendering </h2>
        <a target="_blank" href="https://tuyendung.evotek.vn/react-roadmap-render-props-vs-higher-order-components-cac-mau-thiet-ke-trong-thuc-te/">https://tuyendung.evotek.vn/react-roadmap-render-props-vs-higher-order-components-cac-mau-thiet-ke-trong-thuc-te/</a>
      </div>
      <div>
          <h2>Content</h2>
          <MouseDisplayWithHooks />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
