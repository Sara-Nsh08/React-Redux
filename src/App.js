import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from './Actions/index';
import { decrement } from './Actions/index';


function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <>
      <div className="App">
        <h1>Counter {counter}</h1>
        <button className='item' onClick={() => dispatch(increment())}>+</button>
        <button className='item' onClick={() => dispatch(decrement())}>-</button>
        {isLogged ? <h3>For authorized personal only</h3> : " "}
      </div>
    </>
  );
}

export default App;
