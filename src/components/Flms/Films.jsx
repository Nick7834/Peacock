import React from 'react'
import styles from './Film.module.scss'
import { ButtonNow } from '../ui/ButtonNow/ButtonNow'
import { ButtonPluses } from '../ui/ButtonPluses/ButtonPluses'

export const Films = ({imgs}) => {
  return (
    <div className={styles.film} style={{
      background: `url('${imgs}') no-repeat`,
      width: '183px',
      height: '274px',
      borderRadius: '6px',
      backgroundSize: 'cover',
    }}>

      <div className={styles.pluse}>
          <ButtonPluses />
      </div>

      <div className={styles.now}>
        <ButtonNow />
      </div>
        

    </div>
  )
}
