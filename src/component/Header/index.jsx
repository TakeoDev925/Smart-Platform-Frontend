import React from 'react'
import TopBg from '../../assets/png/topbg.png'
import styles from './styles'

function Header (props) {
  return (
    <div style={styles.layout}>
      <img src={TopBg} style={styles.topBgImage} alt='topbg' />
      <label style={styles.title}>{props.title}</label>
    </div>
  )
}

export default Header
