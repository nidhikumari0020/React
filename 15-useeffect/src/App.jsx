import React, { useEffect } from 'react'
import { useState } from 'react'

const App = () => {

const [num, setNum] = useState(0)

useEffect(function(){
  console.log("use efefct is running..")
})



  return (
    <div>
      <h1>{num}</h1>
      <button onClick={()=>{
        setNum(10)
      }}>click</button>
    </div>
  )
}

export default App
