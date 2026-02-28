import React from 'react'
import { useDispatch } from 'react-redux'
import { increment, decrement } from './counterSlice'

const CounterButtons = () => {
  const dispatch = useDispatch()

  return (
    <div style={{ margin: "20px"}}>
      <button onClick={() => dispatch(increment())} style={{ margin: "10px"}}>
        Increase ++
      </button>

      <button onClick={() => dispatch(decrement())}>
        Decrease --
      </button>
    </div>
  )
}

export default CounterButtons