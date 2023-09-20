import React from 'react'
import Iconbg from '../../assets/png/iconbg.png'
import styles from './styles'

function NumberAvatar (props) {
  return (
    <div style={styles.layout}>
      <div style={styles.avatarView}>
        <img src={Iconbg} style={{ width: 60, height: 60 }} alt='Iconbg' />
        <img src={props.icon} style={styles.avatarIconImage} alt={props.icon} />
      </div>
      <div style={styles.numberAvatarTextView}>
        <label style={styles.numberAvatarTextTitle}>{props.title}</label>
        <div style={styles.numberAvatarTextSubView}>
          <label style={styles.numberAvatarTextSubValue}>{props.value}</label>
          <label style={styles.numberAvatarTextSubValue1}>人</label>
        </div>
      </div>
    </div>
  )
}

export default NumberAvatar
