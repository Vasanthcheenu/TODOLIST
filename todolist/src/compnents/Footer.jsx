import React from 'react'
import { userContext } from '../App'
import { useContext } from 'react';

function Footer() {
  let {user}=useContext(userContext)
  let datetime = new Date().getFullYear()
  
  return (
    <div>
        <footer>TODO FOOTER {datetime}
        <p>&copy; {datetime} {user?.name || "YourAppName"}. All rights reserved.</p>
        </footer>
    </div>
  )
}

export default Footer