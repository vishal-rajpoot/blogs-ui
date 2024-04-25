import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
          <Link to="/" className="logo">
            My blogs
          </Link>
          <nav>
          <Link to="/create" className='create'>Create Post</Link>
          </nav>
        </header>
  )
}

export default Header