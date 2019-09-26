import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  incrementCount,
  decrementCount,
  resetCount
} from '../redux/actions/counterActions'

export default function Counter() {
  const count = useSelector(state => state.counter.count)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>
        Count: <span>{count}</span>
      </h1>
      <button type="button" onClick={() => dispatch(incrementCount())}>
        +1
      </button>
      <button type="button" onClick={() => dispatch(decrementCount())}>
        -1
      </button>
      <button type="button" onClick={() => dispatch(resetCount())}>
        Reset
      </button>
    </div>
  )
}
