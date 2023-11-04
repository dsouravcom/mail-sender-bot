import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div >
      <nav className="bg-gray-900 p-4 flex justify-between">
      <div className="text-white">Mail Sender Bot</div>
      <div>
        <Link to="/" className="text-white mr-4 hover:underline">Home</Link>
        <Link to="/about" className="text-white mr-4 hover:underline">About</Link>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
