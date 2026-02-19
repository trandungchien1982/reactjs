import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './custom.css'

function Greetings({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Chào mừng trở lại!</h1>;
  } else {
    return <h1>Vui lòng đăng nhập.</h1>;
  }
}
export default Greetings;