import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const CounterDisplayX10 = () => {
  const count = useSelector((state) => state.counter.value)

  return <h2>Counter X10: {count * 10}</h2>
}

export default CounterDisplayX10
