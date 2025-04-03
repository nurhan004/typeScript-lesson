import React from 'react'

interface InfoProps {
    name: string;
    age: number;
    img: string;
}
function Info({name, age, img} :InfoProps) {
  return (
    <div>
        <h1>{name}</h1>
        <h1>{age}</h1>
        <img src={img}/>
    </div>
  )
}

export default Info