import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
        <ul style={{display:"flex",justifyContent:"center",gap:"20px"}}>
            <li style={{color:"green",listStyle:"none"}}><Link to={"/"}>Home</Link></li>
            <li style={{color:"green",listStyle:"none"}}><Link to={"/about"}>About</Link></li>
        </ul>
    </div>
  )
}

export default Header