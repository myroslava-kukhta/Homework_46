import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <ul className={styles.menu}>
          <li className='inline-block mr-4'>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header;