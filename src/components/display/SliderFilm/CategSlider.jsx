import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';

import { CartCateg } from '../../CartCateg/CartCateg';


export const CategSlider = ({categs}) => {

    const [categ, setCateg] = React.useState([]);

    React.useEffect(() => {
        fetch('https://64419d6bfadc69b8e0883a16.mockapi.io/Categories')
        .then(res => res.json())
        .then(json => {
            setCateg(json)
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
                    spaceBetween={14}
                    slidesPerView={3}
                    ref={categs}
                >
                
                  {categ.map((item, index) => {
                    return (
                      <SwiperSlide>
                        <CartCateg key={index} imgs={item.photos} names={item.names} />
                      </SwiperSlide>
                    )
                  })}
          
                </Swiper>
    </div>
  )
}

 