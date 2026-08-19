import React from 'react'
import Card from './components/Card'

function App() {
  return (
    <div className='parent'>
    <Card  user='Aman' img='https://images.unsplash.com/photo-1715837644848-ec3bf4726b73?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D'/>
    <Card user='Sarthak' img='https://images.unsplash.com/photo-1778244305115-4dd2bf7c8e86?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
    </div>
  )
}

export default App
