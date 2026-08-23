import React, { useState } from 'react'

const App = () => {


const [num, setNum] = useState({user:'nidhi',age:20})

const btnClicked = ()=>{
 
 setNum(prev=>({...prev,age:50}))
  

}
  return (
    <div>
      <h1>{num.user},{num.age}</h1>
      <button onClick={btnClicked}>Click</button>
      
    </div>
  )
}


export default App
