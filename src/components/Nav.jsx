import React from 'react'
import '../styles/nav.css'

export function Nav() {
  return (
    <div className='navbar'>
        <div className='navContainer'>
          <div>
            <span className='logo'>Booking.com</span></div>
            <div className='nav-btn'>
                <button>Register</button>
                <button>Login</button>

            </div>

        </div>
    </div>
  )
}

