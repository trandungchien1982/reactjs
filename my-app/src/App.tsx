
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './comps/Counter'
import SimpleForm from './comps/SimpleForm'

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
      <h1>22.useReducer</h1>
      <div className="card">
        <h2>React-Roadmap (22.useReducer) - Hooks</h2>
        <a target="_blank" href="https://tuyendung.evotek.vn/quan-ly-state-voi-usereducer-gon-gang-va-de-doan-react-roadmap/">https://tuyendung.evotek.vn/quan-ly-state-voi-usereducer-gon-gang-va-de-doan-react-roadmap/</a>
      </div>
      <div>
          <h2>Content</h2>
          <h3>useReducer-Counter</h3>
          <Counter />

          <hr/>
          <h3>useReducer-SimpleForm</h3>
          <SimpleForm />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
