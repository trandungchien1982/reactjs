import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './custom.css'

function FC01() {
  const [price, setPrice] = useState(0)
  const [year, setYear] = useState(10)

  return (
    <>
      <div className="comp01">FC 01</div>
      <div className="comp01_content" style={{paddingTop:"20px"}}>
        <h1>price : {price}</h1>
        <h1>year : {year}</h1>
      </div>
      <br/>
      <hr/>

        <br/> <br/>
      <br/> <button onClick={() => setPrice((p) => p + 1)}>Tang gia</button>
      <br/> <button onClick={() => setPrice((p) => p - 1)}>GIAM gia</button>
      <hr/>

      <br/> <button onClick={() => setYear(year + 10)}>Tang 10 Year</button>
      <br/> <button onClick={() => setYear(year - 5)}>GIAM 5 Year</button>

      <hr/>
      <br/> <button onClick={() => {
            setPrice(price + 10);
            setYear(year + 10);
            }}>Tang 10 Price/Year</button>
      <br/> <button onClick={() => {setPrice(price - 5); setYear(year - 5); }}>GIAM 5 Price/Year</button>

    </>
  )
}

export default FC01;
