import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';

import { Films } from '../../Flms/Films'

export const SliderFilm = ({slideRefs}) => {

    const [collections, setCollections] = React.useState([]);

    React.useEffect(() => {
        fetch('https://64419d6bfadc69b8e0883a16.mockapi.io/films')
        .then(res => res.json())
        .then(json => {
          setCollections(json)
        })
        .catch(err => {
          console.warn(err);
          alert('Ошибка при получении данных!');
        });
      }, []);

  return (
    <div>

                <Swiper
                   modules={[Navigation]}
                    spaceBetween={15}
                    slidesPerView={4}
                    ref={slideRefs}
                >
                
                  {collections.map((item, index) => {
                    return (
                      <SwiperSlide>
                        <Films key={index} imgs={item.photos} />
                      </SwiperSlide>
                    )
                  })}
          
                </Swiper>

    </div>
  )
}
