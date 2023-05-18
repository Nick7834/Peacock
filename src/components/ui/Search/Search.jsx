import React from 'react'
import styles from './Search.module.scss'

export const Search = () => {
  return (
    <div>
        <form className={styles.form}>
            <button className={styles.button} style={{
                backgroundImage: `url('./public/search.svg')`,
                width: '23px',
                height: '23px',
            }}></button>
            <input type="text" placeholder='Search' className={styles.search} />
        </form>
    </div>
  )
}
