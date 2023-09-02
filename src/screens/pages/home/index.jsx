import React from 'react'
import Bg from '../../../assets/png/bg.png'
import SpinLogo from '../../../component/SpinLogo'
import TopBg from '../../../assets/png/topbg.png'
import { useNavigate } from 'react-router-dom'
import styles from './styles'

function Home () {
  const navigate = useNavigate()

  const goTourism = () => {
    navigate('/tourism')
  }

  return (
    <div style={styles.layout}>
      <img src={TopBg} style={styles.topBgImage} alt='topbg' />
      <span style={styles.title}>管理系統</span>

      <div style={styles.container}>
        <div
          // className='menuStartButton'
          style={{width: 200}}
          onClick={goTourism}
          name='menuItemButton'
        ></div>
        <SpinLogo />
        <div
          className='menuStartButton'
          onClick={goTourism}
          name='menuItemButton'
        >
          智慧旅游
        </div>
      </div>
    </div>
  )
}

export default Home
