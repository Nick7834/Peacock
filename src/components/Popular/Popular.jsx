import React from 'react'
import styles from './Popular.module.scss'

import { FilmP } from '../FilmP/FilmP'
import { ButtonMore } from '../ui/ButtonMore/ButtonMore'

export const Popular = ({title}) => {
  return (
    <div className={styles.popular}>

        <div className={styles.popularTop}>
            <h1 className={styles.title}>{title}</h1>
            <button className={styles.button}>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div> 

        <div className={styles.films}>
            <FilmP 
                imgFilm={'https://www.kino-teatr.ru/movie/poster/138744/97693.jpg'}
                names={'Halloween Kills'}
                num={'PG-14'}
                genre={'Slasher/Thriller'}
                rating={'6.3'} />

            <FilmP 
                imgFilm={'https://images-s.kinorium.com/movie/poster/475785/w1500_37543297.jpg'}
                names={'The other guys'}
                num={'NC-17'}
                genre={'Comedy/Action'}
                rating={'6.7'} />
        </div>

    <div className={styles.buttonMore}>
           <ButtonMore />
    </div>

    </div>
  ) 
}
