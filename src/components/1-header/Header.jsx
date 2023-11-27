import React, { useState } from 'react'
import "./header.css"
export default function Header() {
  const [showmodal, setshowModal] = useState(false)
  return (
    <header className=' flex'>
      <button className='menu icon-menu flex' onClick={() => { setshowModal(true) }} />
      <div />
      <nav>
        <ul className='flex'>
          <li><a href="">About</a></li>
          <li><a href="">Articles</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="">Media</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </nav>

      <button className='mode flex'>
        <span className='icon-moon-o'></span>
      </button>

      {showmodal && (
        <div className='fixed'>
        <ul className='popUp'>
          <li>
            <button className="icon-close" onClick={() => { setshowModal(false) }}/>
          </li>
            <li><a href="">About</a></li>
            <li><a href="">Articles</a></li>
            <li><a href="">Prjects</a></li>
            <li><a href="">Media</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </div>
      )}

    </header>
  )
}
