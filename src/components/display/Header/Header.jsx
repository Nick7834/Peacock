import React from 'react'
import styles from './Header.module.scss'
import { Nav } from '../../ui/Nav/Nav'

export const Header = () => {
  return (
    <div className={styles.header}>
      
      <a href='/' className={styles.logo}>
        <img src="./logo.svg" alt="logo" />
        Peacock
      </a>

     <Nav />

    </div>
  )
}