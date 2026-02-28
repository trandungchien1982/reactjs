import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const CounterDisplay = () => {
  const count = useSelector((state) => state.counter.value)

  return <h2>Counter: {count}</h2>
}

export default CounterDisplay
