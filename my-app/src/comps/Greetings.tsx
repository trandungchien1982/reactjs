import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './custom.css'

function Greetings({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h3>HAVE LOGN - Chào mừng trở lại!</h3>;
  } else {
    return <h3>NO LOGIN - Vui lòng đăng nhập.</h3>;
  }
}
export default Greetings;