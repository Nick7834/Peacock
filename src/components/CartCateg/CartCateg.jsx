import React from 'react'
import styles from './CartCateg.module.scss'

export const CartCateg = ({imgs, names}) => {
  return (
    <div className={styles.cartCateg} style={{
        background: `url('${imgs}') no-repeat`,
        width: '250px',
        height: '167px',
        borderRadius: '6px',
        backgroundSize: 'cover',
      }}>

        <h1 className={styles.title}>{names}</h1>

    </div>
  )
}
