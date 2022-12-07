import React, {useEffect, useState} from 'react'
import '../styles/App.css';

const App = () => {
//code here 
  const [color,setColor] = useState("redColor");
  // const [setColor1] = useState("blue");
  return (
    <div id="main">
      <p className={color} >Newton School</p>
      <button id='button' onClick={() => setColor('blueColor')}>Change Style</button>
    </div>
  )
}


export default App;