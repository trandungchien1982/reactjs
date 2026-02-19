import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './custom.css'

function FC01(props) {
  const [price, setPrice] = useState(0)
  const [year, setYear] = useState(10)

  useEffect(() => {
      // Khi price thay doi thi se call method : props.updatePrice
      console.log(" -- Thay doi price value sang : " + price);
      props?.updatePrice?.call(this, price);
    }, [price]); // Empty array ensures it only runs once


  return (
    <>
      <div className="comp01">FC 01</div>
      <div className="comp01_content"
        style={{paddingTop:"20px",
            background: props?.background || "lightgreen"
        }}>
        <h1>price : {price}</h1>
        <h1>year : {year}</h1>

        <hr/>
        <h1>Props: price : {props?.price}</h1>
        <h1>Props: year : {props?.year}</h1>

      </div>
      <br/>
      <hr/>

      <div style={{marginTop: "300px"}}><button onClick={() =>  setPrice((p) => p + 1)  }>Tang gia</button>
      <br/> <button onClick={() => setPrice((p) => p - 1)}>GIAM gia</button>
      <hr/>

      <br/> <button onClick={() => setYear(year + 10)}>Tang 10 Year</button>
      <br/> <button onClick={() => setYear(year - 5)}>GIAM 5 Year</button>

      <hr/>
      <br/> <button onClick={() => {
            setPrice(price + 10);
            setYear(year + 10);
            }}>Tang 10 Price/Year</button>

      <br/> <button onClick={() => {
                console.log(" -- Update props with price: " + price);
                props.updatePrice?.call(this, price);
           }}>Update Props</button>
      <br/> <button onClick={() => {setPrice(price - 5); setYear(year - 5); }}>GIAM 5 Price/Year</button>
      </div>
    </>
  )
}

export default FC01;
