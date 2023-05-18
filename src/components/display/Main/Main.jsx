import React from 'react'
import styles from './Main.module.scss'
import { useRef} from 'react';
import { ButtonNow } from '../../ui/ButtonNow/ButtonNow'
import { ButtonPluses } from '../../ui/ButtonPluses/ButtonPluses'

import { SliderFilm } from '../SliderFilm/SliderFilm';
import { CategSlider } from '../SliderFilm/CategSlider';



export const Main = () => {

  const slideRef = useRef();
  const categ = useRef();

  const prevBuntton = () => {
    slideRef.current.swiper.slidePrev();
  }

  const nextButton = () => {
    slideRef.current.swiper.slideNext();
  }

  const prevCateg = () => {
    categ.current.swiper.slidePrev();
  }

  const nextCateg = () => {
    categ.current.swiper.slideNext();
  }

  return (
    <div>
        
      <header className={styles.header}>
        <ul>
          <li><a href="/" className={styles.link}>Movie</a></li>
          <li><a href="/" className={styles.link}>TV Show</a></li>
          <li><a href="/" className={styles.link}>Anime</a></li>
        </ul>
      </header>

      <main className={styles.main}>

          <div className={styles.banner} 
            style={{
              backgroundImage: `url('./public/banner.jpg')`,
              minWidth: '777px',
              width: '100%',
              height: '318px',
            }}>
              <div className={styles.text}>SEASON 5</div>
              <h1 className={styles.title}>SUPERNATURAL</h1>
              <div className={styles.text}>ACTION, HORROR, COMEDY</div>

              <div className={styles.buttons}>
                  <ButtonNow />
                  <ButtonPluses />
              </div>
          </div>

          <div className={styles.films}>

            <div className={styles.filmTop}>
              <h1 className={styles.plays}>Now Playing</h1>

              <div className={styles.array}>
                <button onClick={prevBuntton} className={styles.slidersPrev}></button>
                <button onClick={nextButton} className={styles.slidersNext}></button>
              </div>

            </div>

            <div className={styles.sliders}>
                <SliderFilm slideRefs={slideRef} />
            </div>
           
          </div>

          <div className={styles.categories}>

            <div className={styles.categTop}>
                <h1 className={styles.plays}>Top Rated Movies</h1>

                <div className={styles.array}>
                  <button onClick={prevCateg} className={styles.slidersPrev}></button>
                  <button onClick={nextCateg} className={styles.slidersNext}></button>
                </div>

            </div>

             <div className={styles.cartCateg}>
                    <CategSlider categs={categ} />
              </div>

          </div>

      </main>

    </div>
  )
}
