import React from 'react'

function Card(props) {
  return (
    <div>
        <div className="card">
        <img src={props.img}></img>
                <h2>{props.user}</h2>

        <p>This is a simple card component.</p>
        <button>view profile</button>
      </div>
    </div>
  )
}

export default Card
