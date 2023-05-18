import React from 'react'
import styles from './FilmP.module.scss'

export const FilmP = ({imgFilm, names, num, genre, rating}) => {
  return (
    <div className={styles.film}>

        <div className={styles.img} style={{
            background: `url('${imgFilm}') no-repeat`,
            width: '64px',
            height: '90px',
            borderRadius: '4px',
            backgroundSize: 'cover'}}></div>

        <div className={styles.main}>
            <div className={styles.titleBlock}>
                <div className={styles.name}>{names}</div>
                <div className={styles.num}>{num}</div>
            </div>

            <div className={styles.genre}>{genre}</div>

            <div className={styles.ratingBlock}>
                <div className={styles.ratingTitle}>Rating:</div>
                <div className={styles.rating}>{rating}</div>
            </div>
        </div>

    </div>
  )
}
