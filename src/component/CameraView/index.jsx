import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper'
import 'swiper/swiper.min.css'
import 'swiper/swiper-bundle.css';

import { AiOutlineClose } from 'react-icons/ai'
import styles from './styles'

function CameraView ({ cameras, onClose }) {
  const [selectIndex, setSelectIndex] = useState(0)

  useEffect(() => {
    setSelectIndex(0)
  }, [cameras])

  if (!cameras[selectIndex]) return <></>
  return (
    <div style={styles.layout}>
      <div style={styles.closeBtn} onClick={onClose}>
        <AiOutlineClose style={{ color: 'white', fontSize: '40px' }} />
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 1500,
          disableOnInteraction: true
        }}
        pagination={{
          clickable: true
        }}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'
      >
        {cameras.map((item, index) => {
          return (
            <SwiperSlide>
              <img
                key={item.id}
                src={cameras[index].image}
                style={styles.cameraImage}
                alt='camera'
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default CameraView
