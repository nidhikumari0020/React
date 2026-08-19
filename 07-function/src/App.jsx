import React from 'react'

const App = () => {

  function btnClicked(){
    console.log("hello")
  }
  
  return (
<div className='parent'>
  <button className='btn'>click  Me</button>
</div>
   
  )
}

export default App
