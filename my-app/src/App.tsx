
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserProfile from './comps/UserProfile'

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
      <h1>25.reduxToolkit.createAsyncThunk</h1>
      <div className="card">
        <h2>React-Roadmap (25.reduxToolkit.createAsyncThunk) - Async Call API requests</h2>
        <a target="_blank" href="https://tuyendung.evotek.vn/bat-dau-voi-redux-toolkit-redux-gio-that-de-dang-react-roadmap/#Xu_Ly_Logic_Bat_Dong_Bo_voi_createAsyncThunk">https://tuyendung.evotek.vn/bat-dau-voi-redux-toolkit-redux-gio-that-de-dang-react-roadmap/#Xu_Ly_Logic_Bat_Dong_Bo_voi_createAsyncThunk</a>
      </div>
      <div>
          <h2>Content</h2>
          <div style={{ background: "lightcyan"}}>
            <h3>User Profile</h3>
            <UserProfile />
          </div>

          <hr />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
