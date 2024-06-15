import React, { useState } from 'react';
import './App.css';

function App(){
const [count,setCount] = useState(20);
const addition = ()=>{
 setCount(count+1) 
}
const subract = ()=>{
  setCount(count-1)
}
  return (
    <>
      <h1>iam starting here :{count}</h1>
      <h2>{count}</h2>
      <button
        onClick={addition}
      >add</button>{" "}

      <button
        onClick={subract}
      >remove</button>
    </>
  );
}

export default App;
