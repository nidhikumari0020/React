import React from 'react'

const App = () => {

const user ={
  username:'nidhi',
  age:20,
  city:'delhi'
}

localStorage.setItem('user',JSON.stringify(user))
  return (
    <div>
      app
    </div>
  )
}

export default App
