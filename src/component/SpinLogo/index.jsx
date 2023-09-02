import React from 'react'
import Map from '../../assets/png/map.png'
import Lbx from '../../assets/png/lbx.png'
import styles from "./styles";

function SpinLogo (props) {
  return (
    <div style={styles.layout}>
      <img src={Map} style={styles.mapImage} alt='map' />
      <img
        src={Lbx}
        className='App-logo'
        alt='lbx'
      />
    </div>
  )
}

export default SpinLogo
