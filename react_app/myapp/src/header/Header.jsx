import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
        <h1>header part</h1>
        <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/contact'}>Contact</Link></li>
            <li><Link to={'/Blog'}>Blog</Link></li>
        </ul>
    </div>
  )
}
